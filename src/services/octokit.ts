// import { Octokit } from "octokit";
import { Octokit } from "octokit";

const token = process.env.GITHUB_AUTH_TOKEN;
const octokitService = new Octokit({ auth: token });

export default octokitService;
