import React from "react";
import PageButton from "../components/PageButton";
import {roles, routes} from "../constant";

const ChapterLead = ({team, clicked, role}) => {
    // get team members from Strapi
    const teamMembers = team==="Ninjas"?["Nikola Petrov", "Ivan Postolov", "Brayan Monticelli", "Kaloyan Sotirov", "Stefan Georgiev"]:["Martin Savov","Stanislav Dimitrov","Kaloyan Chakarov","Stefan Atanasov"];

    return (
        <div className="flex flex-col space-y-4 pt-4">
            {role !== roles.Manager && (
                <h2 className="text-3xl font-bold mb-4 text-center">{team}</h2>
            )}
            {teamMembers.map((teamMember) => (
                <PageButton key={teamMember} text={teamMember} page={routes.history} clicked={clicked} role={role}/>
            ))}
        </div>
    );
}

export default ChapterLead;