import React, {useContext, useState} from 'react';
import Menu from './Menu';
import { useLocation } from 'react-router-dom';
import { page } from "../constant";
import {UIDContext} from "../UIDContext";
import {ReadsingleUser} from "../services/UserFunctions/ReadsingleUser";
const HomePage =()=>{
    const location = useLocation();
    const additionalData = location.state;
    const role=additionalData.role
    const UID = useContext(UIDContext);
    const [user, setUser] = useState(null);

    ReadsingleUser(UID).then((response)=>{
        setUser(response);
    })

    if(user != null){
        return (
            <div className="h-screen w-screen">
                <Menu clicked={page.home} role={role} />
                <div className="h-screen w-screen flex flex-col items-center justify-center">
                    <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-7xl pb-10"><span className="text-blue-800 dark:text-blue-500">{"{"}app{"}"}</span>olica</h1>
                    <h2 className="text-2xl font-bold mb-4 text-center">Hello, {user.name}!</h2>
                </div>
            </div>
        );
    } else {
        return(
            <div className="h-screen w-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4 text-center">Loading ...</h2>
            </div>
        )
    }
}

export default HomePage;
