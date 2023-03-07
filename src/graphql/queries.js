import { gql, useQuery } from '@apollo/client';


export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      text
    }
  }
`;


export const GET_ALL_PLAYERS = gql`
    query GetAllPlayers {
        players {
            name
            position
            team
            height
            weight
        }
    }
        `;