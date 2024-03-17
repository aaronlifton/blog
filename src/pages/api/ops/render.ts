import type { APIRoute } from "astro";

interface DeployData {
  deploy: {
    id: string;
    commit: object;
    status: string;
    trigger: string;
    createdAt: string;
    updatedAt: string;
    finishedAt: string;
  };
  cursor: string;
}
type ApiResponse = {
  deploys: DeployData[];
  numDeploysInPast7Days: number;
};

const getDeploys: () => Promise<ApiResponse> = async () => {
  const url =
    "https://api.render.com/v1/services/srv-cnl30lmd3nmc73evs8kg/deploys?limit=20";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: "Bearer rnd_9c0P3AJgG5VlRpjQd4WnyrmUJJ2W",
    },
  };

  return await fetch(url, options)
    .then(async (res) => (await res.json()) as ApiResponse)
    .catch((err) => {
      console.error(`error: ${err}`);
      return { deploys: [], numDeploysInPast7Days: 0 } as ApiResponse;
    });
};

export const GET: APIRoute = async (Astro) => {
  const data = await getDeploys();
  const numDeploysInPast7Days = data.deploys?.filter(
    (deploy) =>
      new Date(deploy.deploy.createdAt).getSeconds() > Date.now() - 7 * 24 * 60 * 60,
  )?.length;
  return new Response(JSON.stringify({ deploys: data.deploys, numDeploysInPast7Days }));
};
