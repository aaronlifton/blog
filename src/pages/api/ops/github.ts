import octokit from "$services/octokit";
import type { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";
import type { EndpointOptions } from "@octokit/types";
import type { APIRoute } from "astro";
import { RequestError } from "octokit";

const username = "aaronlifton";
const options: Partial<EndpointOptions> = {
  pageSize: 100,
  pageCount: 1,
};

// type ReposResponse = RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"];
type ReposResponse = RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"]["data"]
type Repo = ReposResponse[0]
type Commit = RestEndpointMethodTypes["repos"]["listCommits"]["response"]["data"][0];
// type Commit = {
//     url: string;
//     sha: string;
//     node_id: string;
//     html_url: string;
//     comments_url: string;
//     commit: {
//         url: string;
//         author: {
//             name?: string | undefined;
//             email?: string | undefined;
//             date?: string | undefined;
//         } | null;
//     };
// }

// const repoIter = octokit.paginate.iterator(
//   octokit.rest.repos.listForAuthenticatedUser,
//   {
//     pageSize: 4,
//     page: 1,
//   },
// );

type CommitSort = (a: Commit, b: Commit) => number;
const commitSort: CommitSort = (a, b) => {
    const aCreatedAt = a.commit?.author?.date;
    const bCreatedAt = b.commit?.author?.date;

    if (!aCreatedAt && !bCreatedAt) {
        return 0;
    }
    if (!aCreatedAt) {
        return 1;
    }
    if (!bCreatedAt) {
        return -1;
    }
    return bCreatedAt.localeCompare(aCreatedAt);
}


export async function getCurrentRateLimitRemaining() {
  try {
    // Make a request to any endpoint (e.g., get the authenticated user)
    const response = await octokit.rest.repos.get({
      owner: 'aaronlifton',
      repo: '.config',
    });

    const rateLimitRemaining = response.headers['x-ratelimit-remaining'];

    console.log(`Rate limit remaining: ${rateLimitRemaining}`);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

const repoSort = (a: Repo, b: Repo) => {
  const aCreatedAt = a.created_at;
  const bCreatedAt = b.created_at;
  if (!aCreatedAt && !bCreatedAt) {
    return -1;
  }
  if (!aCreatedAt) {
    return 1;
  }
  if (!bCreatedAt) {
    return -1;
  }
  return bCreatedAt?.localeCompare(aCreatedAt)
 }

export const getRepos = async () => {
  try {
    const allCommits: Partial<Commit>[]= [];
    const repos = await octokit.rest.repos.listForAuthenticatedUser(options); 
    // latest 4 repos
    return repos.data.sort(repoSort)
  } catch (error) {
    console.error(error);  
  }
}
export const getCommits = async () => {
  try {
    const allCommits: Partial<Commit>[]= [];
    const repos = await octokit.rest.repos.listForAuthenticatedUser(options); 
    // latest 4 repos
    const sortedData = repos.data
      .filter(repo => repo.created_at)
      .sort(repoSort)
      .slice(0, 1);
    // for (const repo of repos.data) {
    for (const repo of sortedData.slice(0, 1)) {
      const commitIter = octokit.paginate.iterator(
        octokit.rest.repos.listCommits,
        {
          owner: username,
          repo: repo.name,
          per_page: 1,
          page: 1
        },
      );
      for await (const { data: commits } of commitIter) {
        for (const commit of commits) {
          console.log({commit})
          allCommits.push(commit);
        }
      }
    }

    return allCommits.map((commit) => ({
        author: commit?.commit?.author?.name,
        message: commit?.commit?.message,
        date: commit.commit?.author?.date,
        url: commit.html_url,
      }))
  } catch (error) {
    const rateLimitExceeded =  true
    console.error(error);  
  }
}

// const handleError = () => {
//  if (error instanceof RequestError) {
//     // handle Octokit error
//     // error.message; // Oops
//     // error.status; // 500
//     // error.request; // { method, url, headers, body }
//     // error.response; // { url, status, headers, data }
//   } else {
//     // handle all other errors
//     throw error;
//   }
// }

// const handleGithubRestRateLimitsFromHeaders = (req: Request | null) => {
//   const headerKeys = req?.headers?.keys()
//   const rateLimitExceeded = 100
//   if (headerKeys["x-retry-after"]){
//     console.log(`Retry after ${headerKeys["x-retry-after"]}`)
//     const rateLimitExceeded = req?.headers.get("x-ratelimit-remaining") === "0";
//     const waitForReset = req?.headers.get("x-ratelimit-reset")
//     if (rateLimitExceeded) {
//       const retryIn = req.headers.get("x-ratelimit-reset") || 0;
//       return { retryIn };
//     }
//   }
//   return { retryIn: 0 };
// }

const handleGithubRestRateLimitsFromHeaders = (req: Request | null) => {
  const headerKeys = req?.headers?.keys() || {}
  const rateLimitExceeded = 100
  if (headerKeys["x-retry-after"]){
    console.log(`Retry after ${headerKeys["x-retry-after"]}`)
    const rateLimitExceeded = req?.headers.get("x-ratelimit-remaining") === "0";
    const waitForReset = req?.headers.get("x-ratelimit-reset")
    if (rateLimitExceeded) {
      const retryIn = req.headers.get("x-ratelimit-reset") || 0;
      return { retryIn };
    }
  }
  return { retryIn: 0 };
}

export const GET: APIRoute = async (_state) => {
  try {
    // const {headers} = _state.request
    // githubApiState.set({retryIn: 0};
    // if (headers?.get("x-ratelimit-reset")) {
    //
    //   opts.retryIn = Math.floor((Number.parseInt(headers.get("x-ratelimit-reset") || "0") * 1000 - Date.now()) / 1000);
    // }
    const allCommits = await getCommits();
    return new Response(JSON.stringify({ commits: allCommits }));
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
};

export const GET_REPOS: APIRoute = async (_state) => {
  try {
    const repos = await getRepos();
    return new Response(JSON.stringify({ repos }));
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
};
