import { createYoga, createSchema } from 'graphql-yoga'
 
export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false
  }
}
 
const schema = createSchema({
  typeDefs: /* GraphQL */ `
  type Query {
    hello: String
    posts: [Post]
  }
  type Post {
      id: String
      text: String
  }
  `,
  resolvers: {
    Query: {
        hello: () => 'world',
        posts: () => [{id: '1', text: 'Hello'}, {id: '2', text: 'hi im post number 2'}]
    }
  }
})
 
export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql'
})