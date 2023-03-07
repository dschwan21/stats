import { data } from 'autoprefixer'
import { createYoga, createSchema } from 'graphql-yoga'
import { fetchPlayerList } from '../../data/external.mjs'


export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false
  }
}
 
console.log('heres the function', fetchPlayerList());

const schema = createSchema({
  typeDefs: /* GraphQL */ `
  type Query {
    hello: String
    posts: [Post]
    players: [Player]
  }
  type Post {
      id: String
      text: String
  }
    type Player {
    status: String
    display_name: String
    first_name: String
    last_name: String
    esb_id: String
    gsis_id: String
    birth_date: String
    college_name: String
    position_group: String
    position: String
    jersey_number: String
    height: String
    weight: String
    team_abbr: String
    team_seq: String
    current_team_id: String
    football_name: String
    gsis_it_id: String
    smart_id: String
    headshot: String
    short_name: String
    entry_year: String
    rookie_year: String
    draft_club: String
    draft_number: String
    college_conference: String
    status_description_abbr: String
    status_short_description: String
    uniform_number: String
    suffix: String
    draft_round: String
    season: String
    }
  `,
  resolvers: {
    Query: {
        hello: () => 'world',
        posts: () => [{id: '1', text: 'Hello'}, {id: '2', text: 'hi im post number 2'}],
        players: async () => {
            const playerData = await fetchPlayerList();
            console.log('playerData IN GRAPHWORLD', playerData)
            return playerData.map(player => ({
              display_name: player.display_name,
              first_name: player.first_name,
              last_name: player.last_name,
              position: player.position,
              team: player.team_abbr,
              height: player.height,
              weight: player.weight,
            }));
          }
    }
  }
})

// console.log('hi hi hi', FetchPlayerList())
 
export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql'
})