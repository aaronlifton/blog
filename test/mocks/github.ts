import { vi } from "vitest";
import { mock } from "vitest-mock-extended";
import githubService from "../../rpc-server/services/github.ts";
// export const mockRepoContentsResponse = {
//   path: "data/packages/shared/shallowEqual.js",
// };
// export const mockGetCommitsResponse = [
//   {
//     author: "aaronlifton",
//     message: "(feat) use dependency injection to test tRPC",
//     date: Date.now().toString(),
//     url: "http://github.com/aaronlifton/blog",
//   },
// ];
//
const mockGithubService = vi.mock("githubService", () => {
  return {
    getRepoContents: vi.fn().mockImplementation(() => mockRepoContentsResponse),
    getCommits: vi.fn().mockImplementation(() => mockGetCommitsResponse),
  };
});
export default mockGithubService;
