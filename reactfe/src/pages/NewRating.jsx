import React, {useContext, useState} from 'react';
import SubmitButton from '../components/SubmitButton';
import { TakeUserRatings } from '../services/UserFunctions/ReadAllUserRatings';
import { UIDContext } from '../UIDContext';
import { TakeRatingDiagrams } from '../services/RatingFunctions/ReadlAllRatingDiagrams';
import { createRating } from '../services/CreateRating/CreateRating';
import { createDiagram } from '../services/CreateDiagram/CreateDiagram';
import { addDiagramConnectionToField } from '../services/CreateField/AddDiagramConnectionToField';
import {useLocation} from "react-router-dom";
import CenteredBox from "../layout/CenteredBox";
import Menu from "./Menu";



function Selector({value, setField}) {
    const handleChange = (event) => {
        setField(event.target.value);
    };

    return ( 
        <div className='flex flex-row border border-gray-500 h-10'>
            <div className="flex items-center h-full pl-3 pr-10">
                {value}
            </div>
            <select onChange={handleChange} className='ml-auto text-center border border-l-black px-3'>
                <option value={1}>Individual</option>
                <option value={2}>Delivery Team</option>
                <option value={3}>Guild</option>
                <option value={4}>Cross Guild</option>
                <option value={5}>Company</option>
                <option value={6}>Innovation Hub</option>
            </select>
        </div>
     );
}

function addRatingLogic(takesAction, takesResponsibility, goodCommunication, businessImpact, mastery,UID)
{
    console.log({takesAction, takesResponsibility, goodCommunication, businessImpact, mastery})
    var userRatings=null;
    TakeUserRatings(UID).then((response) => {
        userRatings=response;
        var newestRating=null;
        userRatings.ratings.forEach(rating => {
            if(newestRating == null)
            {
                newestRating=rating;
            }
            else{
                if(newestRating.id < rating.id)
                {
                    newestRating=rating;
                }
            }
            
        });
        TakeRatingDiagrams(newestRating.id).then((diagrams)=>{
            const offsetOfFields= 15;
            var currentRating=newestRating;
            const currentDate=new Date().toISOString();
            const formattedDate = currentDate.split("T")[0];
            if(diagrams.diagrams.length>=3)
            {
                createRating(formattedDate, UID).then((createdRating)=>{
                    currentRating=createdRating;

                    createDiagram(formattedDate, currentRating.id, UID).then((createdDiagram)=>{

                        addDiagramConnectionToField(createdDiagram.id, Number(offsetOfFields) + Number(takesAction));
                        addDiagramConnectionToField(createdDiagram.id, Number(offsetOfFields) + 6 + Number(takesResponsibility));
                        addDiagramConnectionToField(createdDiagram.id, Number(offsetOfFields) + 12 + Number(goodCommunication));
                        addDiagramConnectionToField(createdDiagram.id, Number(offsetOfFields) + 18 + Number(businessImpact));
                        addDiagramConnectionToField(createdDiagram.id, Number(offsetOfFields) + 24 + Number(mastery));
                    })
                });
                
            }
            else{
                createDiagram(formattedDate, currentRating.id, UID).then((createdDiagram)=>{
                    addDiagramConnectionToField(createdDiagram.id, Number(offsetOfFields) + Number(takesAction));
                    addDiagramConnectionToField(createdDiagram.id, Number(offsetOfFields) + 6 + Number(takesResponsibility));
                    addDiagramConnectionToField(createdDiagram.id, Number(offsetOfFields) + 12 + Number(goodCommunication));
                    addDiagramConnectionToField(createdDiagram.id, Number(offsetOfFields) + 18 + Number(businessImpact));
                    addDiagramConnectionToField(createdDiagram.id, Number(offsetOfFields) + 24 + Number(mastery));
                });
            }
        });
        
    });
    
    
}
   

function NewRating() {
    const UID = useContext(UIDContext);
    const[takesAction,setTakesAction]=useState(1);
    const[takesResponsibility,setTakesResponsibility]=useState(1);
    const[goodCommunication,setGoodCommunication]=useState(1);
    const[businessImpact,setBusinessImpact]=useState(1);
    const[mastery,setMastery]=useState(1);

    const state = useLocation();
    const additionalData = state.state;
    const clicked = additionalData.clicked;
    const role = additionalData.role;

        const handleSubmit = (e) => {
            e.preventDefault();
            //console.log({takesAction, takesResponsibility, goodCommunication, businessImpact, mastery});
            //instead of console.log i have to write data to strapi
            addRatingLogic(takesAction, takesResponsibility, goodCommunication, businessImpact, mastery, UID);
        };



        return (
            <div>
                <Menu role={role} clicked={clicked}/>
                <CenteredBox>
                    <h2 className="text-2xl font-bold mb-4 flex justify-center">Create New Rating</h2>
                    <form onSubmit={handleSubmit}>
                        <Selector value="Takes Action" setField={setTakesAction}/>
                        <Selector value="Takes Responsibility" setField={setTakesResponsibility}/>
                        <Selector value="Good Communication" setField={setGoodCommunication}/>
                        <Selector value="Business Impact" setField={setBusinessImpact}/>
                        <Selector value="Mastery" setField={setMastery}/>
                        <div className="pt-5">
                            <SubmitButton value="Submit" />
                        </div>
                    </form>
                </CenteredBox>
            </div>
        );
    
    }

 
export default NewRating;