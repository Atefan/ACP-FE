import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';


const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  });


const SETRATING = gql`
mutation($date: Date!,$user_id: ID!){
    createRating(
      data: {
        Date: $date
        users_permissions_user_id:  $user_id
      }
    ) {
      data {
        id,
        attributes {
          Date
          users_permissions_user_id
          {
            data {
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`

export const createRating = async (date, userId) => {
  const{loading, error, data} =  await client
      .mutate({
        mutation: SETRATING,
        variables: { date, user_id: userId }
      });

    if(loading){
      console.log("Loading...")
      return []
    }

    
    if(error){
        console.log("Error with creating rating")
        return []
    }


    if(data == null )
      return []
    return data.createRating.data;
      // .then((response) => {
      //   console.log('Rating created:', response.data.createRating.data);
      //   return response.data;
      // })
      // .catch((error) => {
      //   console.error('Error creating rating:', error);
      // });
  };
  