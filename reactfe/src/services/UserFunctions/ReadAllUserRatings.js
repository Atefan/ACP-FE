

import { useQuery, gql} from '@apollo/client'
import { client } from '../User';
import User from './User';



const singleUser = gql`
query getsingleUser($id : ID!){
        
    usersPermissionsUser(id : $id){
        data{
            id
            attributes{
                
            	ratings_id{
                  data{
                    id	
                    attributes{
                      Date
                    }
                  }
                }   
            
            }
        }
    }   
}
`


export const TakeUserRatings =  async (uid) => {

    const{loading, error, data} = await client.query({query : singleUser,  variables: { id: uid } });

    

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



    const user = new User(data.usersPermissionsUser.data.id,undefined, undefined,  data.usersPermissionsUser.data.attributes.ratings_id, undefined)
    return user
}