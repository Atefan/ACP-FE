import React from 'react'
import { ReadAllUsers } from './AllUsers'
import { ReadsingleUser } from './ReadsingleUser';

export const TakeUserFromEmail = async (email) => {
    let users = await ReadAllUsers();
    
    
    if(users !== undefined)
    {
        const user1 = users.filter((user) => user.email == email )
        
        return user1;
    }
    return null 

}
