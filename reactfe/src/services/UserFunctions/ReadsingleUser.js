

import { useQuery, gql} from '@apollo/client'
import { client } from '../User';
import User from './User'




const singleUser = gql`
query getsingleUser ($id : ID!){
        
    usersPermissionsUser(id : $id){
        data{
            id
            attributes{
                username
                email
              
            }
        }
    }
}
`


export const ReadsingleUser = async (uid) => {

    const{loading, error, data} = await client.query({query : singleUser, variables: {id : uid}});


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


    const user = new User(data.usersPermissionsUser.data.id, data.usersPermissionsUser.data.attributes.username, data.usersPermissionsUser.data.attributes.email, undefined, undefined)
    
    
    
    return user
}
