

import { useQuery, gql} from '@apollo/client'
import { client } from '../User';
import Rating from './Rating'




const singleRating = gql`
    query getsingleRating($id : ID!){

        rating(id : $id){
            data{
                id
                attributes{
                    Date
                }

            }
        
        }
    }
`


export const SingleRating = async (rid) => {

    const{loading, error, data} = await client.query({query : singleRating, variables: {id : rid}});

   
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
    const rating = new Rating(data.rating.data.id,undefined, data.rating.data.attributes.Date)
    return rating
}


