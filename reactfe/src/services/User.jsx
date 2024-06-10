import { ApolloClient, InMemoryCache, } from '@apollo/client'
import { useMutation, gql } from '@apollo/client';
import { addUIDWebStorage, addWebStorage } from '../configuration/webStorage';

const client = new ApolloClient({
    uri:'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

const ADDUSER = gql`
mutation ($username:String!, $password:String!, $email:String!, $role:ID!){
  createUsersPermissionsUser(
    data: {
      username:$username
      password:$password
      email:$email
      confirmed:true
      role:$role
    }
  ){
    data{
      attributes{
        username,
        email
      }
    }
  }
}
  
`



function registerUser(username, password, email, role)
{
  client.mutate(
    {
      mutation:ADDUSER,
      variables: {username, password, email, role}
    }
  )
  .then((response)=>{
    return;
  })
  .catch((error)=>{
    console.error("Error:", error.message);
    console.error("Stack Trace:", error.stack);
  })
  
}

const LOGIN = gql`
mutation login($identifier:String!, $password:String!){
  login(input:{
    identifier: $identifier,
    password: $password
  }){
    jwt,
    user{
      id
    }
  }
}
`
function  login(identifier, password)
{
  client.mutate(
    {
      mutation:LOGIN,
      variables: {identifier, password}
    }
  )
  .then((response)=>{
    addWebStorage(response.data.login.jwt);
    addUIDWebStorage(response.data.login.user.id);
  })
  .catch((error)=>{
    // console.error("Error:", error.message);
    // console.error("Stack Trace:", error.stack);
    throw(error);
  })
}


export { client, registerUser, login };

