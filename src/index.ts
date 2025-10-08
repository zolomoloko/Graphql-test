import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// 2. Resolver
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// 3. Apollo сервер үүсгэх
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const {url} = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀 server running at: ${url}`)
