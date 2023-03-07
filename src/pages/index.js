import { gql, useQuery } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GET_ALL_PLAYERS, GET_POSTS } from '@/graphql/queries';

// const GET_POSTS = gql`
//   query GetPosts {
//     posts {
//       id
//       text
//     }
//   }
// `;


export default function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);
  const { Playersloading, PlayersError, playerData } = useQuery(GET_ALL_PLAYERS);

  // console.log('loading', Playersloading)
  // console.log('error', PlayersError)
  // console.log('playerData', playerData)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (Playersloading) return <p>Players Loading...</p>;
  if (PlayersError) return <p>Players Error :(</p>;


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
