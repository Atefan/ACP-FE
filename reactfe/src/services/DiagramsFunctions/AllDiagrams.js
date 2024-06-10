

import { useQuery, gql} from '@apollo/client'
import Diagram from './Diagram'
import { client } from '../User';




const Categories = gql`
    query getDiagrams {

        diagrams{
            data{
                id
                attributes{
                    Date
                }

            }
        
        }
    }
`


export const ReadAllDiagrams = async() => {

    const{loading, error, data} = await client.query({query : Categories});

    if(loading){
        console.log("Loading...")
        return []
    }

    
    if(error){
        console.log("Error with reading all the users...")
        return []
    }


    if(data == null)
        return [];


    const diagrams = data.diagrams.data.map(diagram => ({
        diagram : new Diagram(diagram.id, diagram.attributes.Date, undefined)
      }));
    return diagrams
}


