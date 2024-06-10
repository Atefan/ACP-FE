
import {gql} from '@apollo/client'
import { client } from '../User';
import User from './User';





const Users = gql`
    query getUsers {
        usersPermissionsUsers{
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


export const ReadAllUsers = async () => {

    const{loading, error, data} = await client.query({
        query : Users
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
        return [];

    const users = data.usersPermissionsUsers.data.map((user) => 
        {
            const user1 = new User(user.id, user.attributes.username, user.attributes.email,undefined,undefined)
            return user1 
        }
    );
      
    return users
}
