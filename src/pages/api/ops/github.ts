import octokit from "$services/octokit";
import type { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";
import type { EndpointOptions } from "@octokit/types";
import type { APIRoute } from "astro";

const username = "aaronlifton";
const options: Partial<EndpointOptions> = {
  pageSize: 100,
  pageCount: 1,
};

type RepoRes = RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"];
type CommitRes = RestEndpointMethodTypes["repos"]["listCommits"]["response"];
type Commit = {
    url: string;
    sha: string;
    node_id: string;
    html_url: string;
    comments_url: string;
    commit: {
        url: string;
        author: {
            name?: string | undefined;
            email?: string | undefined;
            date?: string | undefined;
        } | null;
    };
}

// const repoIter = octokit.paginate.iterator(
//   octokit.rest.repos.listForAuthenticatedUser,
//   {
//     pageSize: 4,
//     page: 1,
//   },
// );
export async function getCurrentRateLimitRemaining() {
  try {
    // Make a request to any endpoint (e.g., get the authenticated user)
    const response = await octokit.rest.repos.get({
      owner: 'aaronlifton',
      repo: '.config',
    });

    // Get the 'x-ratelimit-remaining' header from the response headers
    const rateLimitRemaining = response.headers['x-ratelimit-remaining'];

    console.log(`Rate limit remaining: ${rateLimitRemaining}`);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}
export const getRepos = async () => {
  try {
    const allCommits: Partial<Commit>[]= [];
    const repos = await octokit.rest.repos.listForAuthenticatedUser(options); 
    // latest 4 repos
    return Array.from(repos.data.sort((a, b) => new Date(b.created_at || Date(a.created_at).getTime())))
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
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 1);
    // for (const repo of repos.data) {
    for (const repo of sortedData) {
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
    const rateLimitExceeded =  
    console.error(error);  
  }
}

const handleGithubRestRateLimitsFromHeaders = (req: Request | null) => {
  const headerKeys = req?.headers?.keys().

  const rateLimitExceeded: number = 100
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
