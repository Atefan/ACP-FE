
class Field{ 

    constructor(id, grade, type, diagramIds)
    {
        if(grade !== null)
            this.grade = grade;
        if(type !== null)
            this.type = type 
        this.id = id
        if(diagramIds==null)
            this.diagramIds = [];
        else
        {
            var tmp=[];
            diagramIds.data.forEach(diagramId => {
                tmp=[...tmp, diagramId.id];
            });
            this.diagramIds = tmp;
        }    
    }
}

export default Field 