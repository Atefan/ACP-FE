import Diagram from '../DiagramsFunctions/Diagram'
class Rating {
    constructor(id, date, diagrams)
    {
        if(date !== null && date !== undefined)
        {
            this.date = date; 
        }
        if(diagrams !== null && diagrams !== undefined)
        {
             this.diagrams = diagrams.data.map((diagram) => {
                
                return new Diagram(diagram.id, diagram.attributes.Date, diagram.attributes.fields_ids)
             });
        }
       
    
        this.id = id
    }

}

export default Rating