import Diagram from '../DiagramsFunctions/Diagram'
import Rating from '../RatingFunctions/Rating'
class User {
    constructor(id, name, email, ratings, diagrams)
    {  
        this.email =  email;
        if(name !== null && name !== undefined)
            this.name = name
        if(email !== null && email !== undefined)
        {
            this.email = email
        }
        
        if(ratings !== null && ratings !== undefined)
        {
             this.ratings = ratings.data.map((rating) => {
                return new Rating(rating.id, rating.attributes.Date, rating.attributes.diagrams_id);

             })
        }
           
        if(diagrams != null && diagrams !== undefined)
        {
            this.diagrams = diagrams.data.map(
                (diagram) => {
                    return new Diagram(diagram.id, diagram.attributes.Date, diagram.attributes.fields_id)
                }
            );
        } 
        this.id = id    
    }




}


export default User