import Field from '../FieldsFunctions/Field'


class Diagram{
    constructor(id, date, fields, type)
    {

        if(date !== null && date !== undefined)
        {
           this.date = date 
        }
            
        if(this.fields !== null && fields !== undefined)
        {
            this.fields = fields.data.map((field) => {
                let field1 =  new Field(field.id, field.attributes.Grade, field.attributes.Type)
                return field1
            })

        }
        if(Number.isInteger(id))
            this.id = id;    
    }
}

export default Diagram