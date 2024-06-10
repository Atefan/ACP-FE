import { gql, ApolloClient, InMemoryCache } from '@apollo/client';

const UPDATE_USER_MUTATION = gql`
  mutation($team_id: ID!, $user_id: [ID!]!) {
    updateTeam(id: $team_id, data: { users_permissions_users: $user_id }) {
      data {
        attributes {
          name
          users_permissions_users: users_permissions_users {
            data {
              attributes {
                username
                email
              }
            }
          }
        }
      }
    }
  }
`;

const GETIDS = gql`
  query($team_id: ID!) {
    team(id: $team_id) {
      data {
        attributes {
          users_permissions_users {
            data {
              id
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`;    

export const addUserToTeam= (teamID, userID)=>{
    const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
    });

    client.query({
        query: GETIDS,
        variables: { team_id: teamID },
      })
        .then((response) => {
          const { data } = response;
          console.log(data);
      
          const teamData = data.team.data.attributes.users_permissions_users.data;
          const ids = teamData.map((item) => item.id);
          const updatedIds = [...ids, userID];
          console.log(updatedIds);
      
          return client.mutate({
            mutation: UPDATE_USER_MUTATION,
            variables: {
              team_id: teamID,
              user_id: updatedIds,
            },
          });
        })
        .then((response) => {
          console.log('team created:', response);
        })
        .catch((error) => {
          console.error('Error creating team:', error);
        });
      
}
