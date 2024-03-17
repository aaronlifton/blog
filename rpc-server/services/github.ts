import octokit from "$services/octokit";
import type { EndpointOptions } from "@octokit/types";
import type { APIRoute } from "astro";
import type { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";
import { z } from "zod";

export const ZodType = z.object({ numItems: z.number() })

const username = "aaronlifton";
const options: Partial<EndpointOptions> = {
  pageSize: 100,
  pageCount: 1,
};

type ReposResponse = RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"];
type CommitsResponse = RestEndpointMethodTypes["repos"]["listCommits"]["response"];

// const repoIter = octokit.paginate.iterator(
//   octokit.rest.repos.listForAuthenticatedUser,
//   {
//     pageSize: 4,
//     page: 1,
//   },
// );

export const getCommits = async () => {
  try {
    const allCommits: CommitsResponse["data"] = [];
    const repos = await octokit.rest.repos.listForAuthenticatedUser(options); 
    for (const repo of repos.data) {
      const commitIter = octokit.paginate.iterator(
        octokit.rest.repos.listCommits,
        {
          owner: username,
          repo: repo.name,
          per_page: 4,
        },
      );
      for await (const { data: commits } of commitIter) {
        for (const commit of commits) {
          allCommits.push(commit);
        }
      }
    }

    return allCommits.map((commit) => {
      return {
        author: commit.author?.name,
        message: commit.commit?.message,
        date: commit.commit?.author?.date,
        url: commit.html_url,
      };
    });

  } catch (error) {
    console.error(error);  
  }
}

export const GET: APIRoute = async (_state) => {
  try {
    return new Response(JSON.stringify({ commits: allCommits }));
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
};
