import { gql, ApolloServer } from 'apollo-server-micro'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// define the types that we will be working with
const typeDefs = gql`
  type Post {
    id: String
    text: String
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    createPost(text: String): Post
  }`;

// define the resolvers that we will be working with, scheme needs to match the typeDefs
const resolvers = {
    Query: {
        posts: (_parent, _args, _context) => {
            return prisma.post.findMany();
        }
    }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers });


const handler = apolloServer.createHandler({ path: '/api/graphql' });

export const config = { api: { bodyParser: false } };

export default handler;