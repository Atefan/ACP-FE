
import { client } from '../User';
import { useQuery, gql} from '@apollo/client'
import Rating from './Rating'





const singleRating = gql`
query getsingleRating($id : ID!){
        
    rating(id : $id){
        data{
            id
            attributes{
                
                diagrams_id{
                  data{
                    id	
                    attributes{
                      Date
                      fields_ids{
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
        }
    }
}
`


export const TakeRatingDiagrams =  async (uid) => {

    const{loading, error, data} = await client.query({query : singleRating,variables: { id: uid }})



    if(loading){
        console.log("Loading...")
        return []
    }

    
    if(error){
        console.log("Error with reading all the users...")
        return []
    }


    if(data == null )
      return []
    return new Rating(data.rating.data.id, undefined, data.rating.data.attributes.diagrams_id)
    
    
}
