import { GraphQLClient, gql } from "graphql-request";

const CLIENT_SECRET =
  import.meta.env.SECRET_FAUNA_ADMIN_KEY ||
  import.meta.env.SECRET_FAUNA_CLIENT_KEY;
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
    .catch((data) => console.log("graphql error"));
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
