import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import {Types} from '../../App';

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  });

  
const SETFIELD = gql
` 
  mutation($grade: Float!, $type: ENUM_FIELD_TYPE!) {
    createField(
      data: {
        Type: $type
        Grade: $grade
      }
    ) {
      data {
        attributes {
          Type
          Grade
        }
      }
    }
  }
  
`

export const createField = async ( grade, type) => {
    await client
      .mutate({
        mutation: SETFIELD,
        variables: { grade, type }
      })
      // .then((response) => {
      //   console.log('Field created:', response.data.createField.data);
      // })
      // .catch((error) => {
      //   console.error('Error creating field:', error);
      // });
  };

export const createAllFields = async (  ) => {

  const enumTypes = ['Action', 'Responsibility', 'Communication_skills', 'Business_impact_and_value', 'Mastery'];

  for(let i=0; i<30; i+=1)
  {
    await createField(i%6+1, enumTypes[Math.floor(i/6)]);
  }
}