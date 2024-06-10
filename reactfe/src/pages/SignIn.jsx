import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes,roles } from "../constant";
import { login } from '../services/User';
import { getJwtWebStorage } from '../configuration/webStorage';
import SubmitButton from '../components/SubmitButton'
import CenteredBox from "../layout/CenteredBox";


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //TODO add try catch and handle the error and display it
        try{
            login(email, password);
        }
        catch(err)
        {
            console.log("Invalid credentials");
        }

        if(getJwtWebStorage())
        {
            // get user's role
            const role = roles.Leader;
            if(role === roles.Admin){
                navigate(routes.adminPanel);
            } else{
                navigate(routes.home, { state:{role: role}});
            }
        }
      
    };

    return (
        <CenteredBox>
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">
                        Email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-full border-2 border-gray-300 focus:border-blue-300 focus:outline-none rounded-md px-3 py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        className="w-full border-2 border-gray-300 focus:border-blue-300 focus:outline-none rounded-md px-3 py-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <SubmitButton value="Log in"/>
                </div>
                <div className="text-center">
                    <Link to={routes.forgotPassword} className="text-blue-500">
                        Forgot password?
                    </Link>
                </div>
            </form>
        </CenteredBox>
    );
}

export default SignIn;
