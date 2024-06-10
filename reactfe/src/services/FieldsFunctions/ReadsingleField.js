
import { gql} from '@apollo/client'
import { client } from '../User';
import Field from './Field'





const singleField = gql`
query getsingleField ($id : ID!){
        
    field(id : $id){
        data
        {
            id
            attributes{
                Grade
                Type
                diagram_ids{
                    data{
                        id
                    }
                }
            }
        }
       
    }
}
`


export const SingleField = async (fid) => {

    const{loading, error, data} = await client.query({query : singleField, variables: {id : fid}});


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
    return new Field(data.field.data.id, data.field.data.attributes.Grade,data.field.data.attributes.Type, data.field.data.attributes.diagram_ids)
   
    
}