
import { graphql } from '@octokit/graphql';

const getLatestCommits = async () => {
  const { repository } = await graphql(
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
