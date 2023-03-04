import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }) {
  return (
  <ApolloProvider client={new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache()
  })}>
   <Component {...pageProps} />
  </ApolloProvider>
  )
}
