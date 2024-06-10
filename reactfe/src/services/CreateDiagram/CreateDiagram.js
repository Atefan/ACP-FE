import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';


const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  });


const SETDIAGRAM = gql`
mutation($date: Date!,$rating_id: ID!,$user_id: ID!){ 
    createDiagram(
      data: {
      Date: $date
      rating_id: $rating_id
      users_permissions_user_id: $user_id
    }
    )
    {
      data
        {
          id,
          attributes{
          Date
          }
        }
    }
  }
`


export const createDiagram = async (date, ratingId, userId) => {
  const{loading, error, data} =  await client
      .mutate({
        mutation: SETDIAGRAM,
        variables: { date, rating_id: ratingId, user_id: userId }
      })

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
      return data.createDiagram.data;
  };
