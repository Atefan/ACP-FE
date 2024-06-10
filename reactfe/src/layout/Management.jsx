import React from 'react';
import MainButton from "../components/MainButton";
import ChapterLead from "./ChapterLead";

const Management = ({clicked, role}) => {
    // get all teams from Strapi
    const teams = ["The dragons", "Ninjas"];
    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Teams</h2>
            {teams.map((team) => (
                <MainButton key={team} text={team}>
                    <ChapterLead team={team} page={"/history"} clicked={clicked} role={role}/>
                </MainButton>
            ))}
        </div>
    );
}

export default Management;
