import { gql, ApolloClient, InMemoryCache } from '@apollo/client';

const UPDATE_USER_MUTATION = gql`
mutation($team_name: String, $user_id: ID!)
{
  createTeam(data:{name:$team_name,leader:$user_id})
  {
    data
    {
      id,
      attributes
      {
        name
      }
    }
  }
}
`;

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
});

export const CreateTeam = (team_name, user_id) => {

    return client
        .mutate({
        mutation: UPDATE_USER_MUTATION,
        variables: {
            team_name: team_name,
            user_id: user_id
        }
        })
        .then((response) => {
        console.log('creating team with id:', response.data.createTeam.data.id);
        return response.data.createTeam.data.id;
        })
        .catch((error) => {
        console.error('Error creating team:', error);
        return null; // or any other value to indicate an error
        });
};
