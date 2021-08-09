import { GraphQLClient, gql } from "graphql-request";

const CLIENT_SECRET =
  process.env.FAUNA_ADMIN_KEY || process.env.FAUNA_CLIENT_SECRET;
const FAUNA_GRAPHQL_BASE_URL = "https://graphql.fauna.com/graphql";

const graphQLClient = new GraphQLClient(FAUNA_GRAPHQL_BASE_URL, {
  headers: {
    authorization: `Bearer ${CLIENT_SECRET}`,
  },
});

export const listLatestContactMessage = () => {
  const query = gql`
    query Contacts($size: Int) {
      Contacts(_size: $size) {
        data {
          _id
          _ts
          website
          name
          email
          message
          createdAt
        }
      }
    }
  `;

  return graphQLClient
    .request(query, { size: 999 })
    .then((data) => data)
    .catch((data) => console.log(data));
};

export const createContactMessage = (newEntry) => {
  const mutation = gql`
    mutation CreateContactMessage($input: ContactMessageInput!) {
      createContactMessage(data: $input) {
        _id
        _ts
        website
        name
        email
        message
        createdAt
      }
    }
  `;

  return graphQLClient.request(mutation, { input: newEntry });
};
