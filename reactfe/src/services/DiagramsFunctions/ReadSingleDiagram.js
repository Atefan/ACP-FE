

import { useQuery, gql} from '@apollo/client'
import { client } from '../User';
import Diagram from './Diagram'




const singleCategory = gql`
    query getsingleCategory($id : ID!){

        diagram(id : $id){
            data{
                id
                attributes{
                    Date
                }

            }
        
        }
    }
`


export const SingleDiagram = async (did) => {

    const{loading, error, data} = await client.query({query : singleCategory, variables: {id : did}});

    
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
    
    return new Diagram(data.diagrams.data.id, data.diagrams.data.attributes.Date, undefined)
}


