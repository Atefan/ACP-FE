import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { SingleField } from '../FieldsFunctions/ReadsingleField';


const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  });

  
const ADDCONNECTION = gql
` 
mutation ($id: ID!, $data: FieldInput!){
    updateField(
    id: $id,
    data: $data
    ) {
          data{
        id
      }
    }
  }
  
`

export const addDiagramConnectionToField = async (diagramId, fieldId) => {
    SingleField(fieldId).then(async (fieldData)=>{
        const updatedDiagramIds = [...fieldData.diagramIds, diagramId];
        console.log(updatedDiagramIds);
        const{loading, error, data} = await client.mutate({
        mutation: ADDCONNECTION,
        variables: { id: fieldId,  data: {diagram_ids: updatedDiagramIds}}
      });
      if(loading){
        console.log("Loading...")
        return []
    }

    
    if(error){
        console.log("Error with reading all the users...")
        return []
    }

    if(data == null)
        return []

    })

    
  };