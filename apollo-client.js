// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://henull-hasura.fly.dev/v1beta1/relay",
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": "xGJQiV6iXy5QjhXS8sdX877xqtcA2hrWtMxDaQBh",
  },
  cache: new InMemoryCache(),
});

export default client;
