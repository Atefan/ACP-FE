import React from "react";
import {useLocation} from "react-router-dom";
import Menu from "./Menu";
import {roles} from "../constant";
import Management from "../layout/Management";
import ChapterLead from "../layout/ChapterLead";
import CenteredBox from "../layout/CenteredBox";

const HistorySelect = () => {
    const state = useLocation();
    const additionalData = state.state;
    const clicked = additionalData.clicked;
    const role = additionalData.role;
    const team = "Ninjas";
    return (
        <div className="h-screen w-screen">
            <Menu clicked={clicked} role={role}/>
            <CenteredBox>
                {role === roles.Manager? <Management role={role} clicked={clicked}/> : <ChapterLead team={team} role={role} clicked={clicked}/>}
            </CenteredBox>
        </div>
    );
}

export default HistorySelect;