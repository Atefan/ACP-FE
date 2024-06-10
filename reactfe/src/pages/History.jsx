import React, {useEffect, useState} from 'react';
import PolarChart from "../components/PolarChart";
import Legend from "../components/Legend";
import { useLocation } from 'react-router-dom';
import Menu from "./Menu";
import {TakeUserRatings} from '../services/UserFunctions/ReadAllUserRatings'
import {TakeRatingDiagrams} from '../services/RatingFunctions/ReadlAllRatingDiagrams'

const History =  () => {
    const state = useLocation();
    const additionalData = state.state;
    const clicked = additionalData.clicked;
    const role = additionalData.role;

    let  uid = 1;
    const [userRatings, setUserRatings] = useState(null);
    const [ratingDiagrams, setRatingDiagrams] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        TakeUserRatings(uid).then((ratings) => {
            setUserRatings(ratings.ratings.reverse());
            TakeRatingDiagrams(ratings.ratings[index].id).then((response) => {
                setRatingDiagrams(response.diagrams);
            });
        });
    }, [uid, index]);

    if(userRatings !== null && ratingDiagrams !== null) {
        let scoresEmployee = {
            takesAction: ratingDiagrams[0].fields[0].grade,
            takesResponsibility: ratingDiagrams[0].fields[1].grade,
            goodCommunication: ratingDiagrams[0].fields[2].grade,
            businessImpact: ratingDiagrams[0].fields[3].grade,
            mastery: ratingDiagrams[0].fields[4].grade
        };

        let scoresLead = {
            takesAction: ratingDiagrams[1].fields[0].grade,
            takesResponsibility: ratingDiagrams[1].fields[1].grade,
            goodCommunication: ratingDiagrams[1].fields[2].grade,
            businessImpact: ratingDiagrams[1].fields[3].grade,
            mastery: ratingDiagrams[1].fields[4].grade
        };

        let scoresFinal = {
            takesAction: ratingDiagrams[2].fields[0].grade,
            takesResponsibility: ratingDiagrams[2].fields[1].grade,
            goodCommunication: ratingDiagrams[2].fields[2].grade,
            businessImpact: ratingDiagrams[2].fields[3].grade,
            mastery: ratingDiagrams[2].fields[4].grade
        };

        return (
            <div className="h-screen w-screen">
                <Menu clicked={clicked} role={role}/>
                <h1 className="text-center py-10 text-2xl"> Date {userRatings[index].date} </h1>
                <div className="flex justify-between">
                    <div className="pr-44 pl-32 flex justify-center">
                        {index > 0 && (<button className="text-6xl text-blue-600" onClick={()=>{
                            setIndex(index-1);
                        }}>
                            {"<"}
                        </button>)}
                    </div>
                    <div className="flex flex-col justify-end">
                        <h1 className="text-center py-10 text-2xl"> Employee </h1>
                        <PolarChart width="350px" height="350px" scores={scoresEmployee}/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-center py-10 text-2xl"> Final </h1>
                        <PolarChart width="500px" height="500px" scores={scoresFinal}/>
                    </div>
                    <div className="flex flex-col justify-end">
                        <h1 className="text-center py-10 text-2xl"> Chapter lead </h1>
                        <PolarChart width="350px" height="350px" scores={scoresLead}/>
                    </div>

                    <div className="pl-44 pr-32 flex justify-center">
                        {index < userRatings.length-1 && (<button className="text-6xl text-blue-600" onClick={()=>{
                            setIndex(index+1);
                        }}>
                            {">"}
                        </button>)}
                    </div>
                </div>
                <Legend/>
            </div>

        );
    }
    else
    {
        return(
            <div className="h-screen w-screen">
                <Menu clicked={clicked} role={role} />
                <div className="h-screen w-screen flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold mb-4 text-center">Loading ...</h2>
                </div>
            </div>
        )
    }
}

export default History;