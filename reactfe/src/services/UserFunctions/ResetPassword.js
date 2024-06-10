import { useQuery, gql, useMutation} from '@apollo/client'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import { client } from '../User';

const updatePassword = gql`
    mutation($id : ID!, $newPassword : String!){
        updateUsersPermissionsUser(id : $id, data :{
             password: $newPassword
        })
        {
        data {
            attributes{
            username
            email
            
            }
        }
        }
    }

`


export const ResetPassword =  async (id, newPassword) => {
    

    await client
    .mutate({
      mutation: updatePassword,
      variables: { id: id, newPassword: newPassword }
    }).then((response ) => {
        console.log(response)
        return response
    })



   
}
