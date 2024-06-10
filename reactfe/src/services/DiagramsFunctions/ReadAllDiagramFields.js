

import { useQuery, gql} from '@apollo/client'
import { client } from '../User';
import Diagram from './Diagram'




const singleDiagram = gql`
query getsingleDiagram($id : ID!){
        
    diagram(id : $id){
        data{
            id
            attributes{
                
                fields_id{
                  data{
                    id	
                    attributes{
                      Grade
                      Type
                    }
                  }
                }   
            
            }
        }
    }
}
`


export const ReadAllDiagramFields =  async (uid) => {

    const{loading, error, data} = await client.query({query : singleDiagram,  variables: { id: uid } });

   

    if(loading){
        console.log("Loading...")
        return []
    }

    
    if(error){
        console.log("Error with reading all the users...")
        return []
    }

    if(data === undefined)
    {
        console.log("Undefined  ")
        return [];
    }
        


    let diagram = new Diagram(data.diagram.data.id, undefined, data.diagram.data.attributes.fields_id)
   
    return diagram
}
