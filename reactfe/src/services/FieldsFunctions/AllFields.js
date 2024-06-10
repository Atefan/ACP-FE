
import { useQuery, gql} from '@apollo/client'
import { client } from '../User';
import Field from './Field'




const Fields = gql`
query getFieds {
        
    fields{
        data
        {
            id
            attributes{
                Grade
                Type
            }
        }
       
    }
}
`


export const ReadAllFields = async () => {

    const{loading, error, data} = await client.query({query : Fields});


    if(loading){
        console.log("Loading...")
        return []
    }

    
    if(error){
        console.log("Error with reading all the users...")
        return []
    }



    if(date == null)
    {
        return []
    }    
    
    let fields = data.fields.data.map(field => ({
        field: new Field(field.id, field.attributes.Grade,field.attributes.Type)
    }));

    return fields
}
