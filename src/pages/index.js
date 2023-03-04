import { gql, useQuery } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      text
    }
  }
`;


export default function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return (
    <>
      <main>
        <h1 className="text-purple-500 text-xl">hello world</h1>
        <ul>
       { data.posts.map(({ id, text }) => (
    <div key={id} onClick={() => onPostsSelected(id)}>
      <p>
        {id}: {text}
      </p>
    </div>
  ))}
        </ul>
      </main>
    </>
  )
}
