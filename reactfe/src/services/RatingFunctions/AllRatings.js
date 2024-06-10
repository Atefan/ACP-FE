

import { useQuery, gql} from '@apollo/client'
import { client } from '../User';
import Rating from './Rating'





const Ratings = gql`
    query getRatings {

        ratings{
            data{
                id
                attributes{
                    Date
                }

            }
        
        }
    }
`


export const ReadAllRatings = async () => {

    const{loading, error, data} = await client.query({query : Ratings});


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

    const ratings = data.ratings.data.map(rating => ({
        rating: new Rating(rating.id, rating.attributes.Date, undefined)
        
      }));
    return ratings
}


