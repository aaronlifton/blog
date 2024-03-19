
import { graphql, type GraphQlQueryResponseData } from '@octokit/graphql';

const getLatestCommits = async () => {
  const { repository }: GraphQlQueryResponseData = await graphql(
    `
      {
        repository(owner: "octokit", name: "graphql.js") {
          issues(last: 3) {
            edges {
              node {
                title
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token secret123`,
      },
    },
  );
  return repository;
}
