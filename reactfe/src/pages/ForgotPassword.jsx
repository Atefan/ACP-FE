import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from "../constant";
import { ResetPassword } from '../services/UserFunctions/ResetPassword';
import { TakeUserFromEmail } from '../services/UserFunctions/TakeUserFromEmail';
import { client } from '../services/User';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setconfirmedPassword] = useState('');
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(() => {

    }, [user])
    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: handle input data and pass it to Strapi

        if(confirmedPassword == password)
        {

            TakeUserFromEmail(email).then(
                (user) => {

                    setUser(user)


                    if(user.lenght !== 0 &&  user[0] !== undefined)
                    {

                        ResetPassword(user[0].id, password).then(
                            () =>{
                                alert("The password has been changed")
                                setEmail('');
                                setPassword('');
                                setconfirmedPassword('');
                                navigate(routes.signIn);
                            }
                        )
                        // Redirect to the home page after successful sign-in
                    }
                    else
                    {
                        console.log("Loading ...")
                    }

                }
            )



        }
        else
        {
            alert("Confirmed password doesn't match with yur new passsword")
            setPassword('');
            setconfirmedPassword('');
        }


    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white p-8 shadow-md rounded-md">
                <div className="flex items-center mb-4">
                    <Link to={routes.signIn} className="mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-500 cursor-pointer"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L9.414 9H18a1 1 0 010 2H9.414l5.293 5.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                    <h2 className="text-2xl font-bold px-5">Forgot password</h2>
                </div>
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
                        <label htmlFor="email" className="block mb-1">
                            New Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your new password"
                            required
                            className="w-full border-2 border-gray-300 focus:border-blue-300 focus:outline-none rounded-md px-3 py-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="email" className="block mb-1">
                            Confirm the Password:
                        </label>
                        <input
                            type="password"
                            id="confirm password"
                            name="confirm password"
                            placeholder="Confirm your new password"
                            required
                            className="w-full border-2 border-gray-300 focus:border-blue-300 focus:outline-none rounded-md px-3 py-2"
                            value={confirmedPassword}
                            onChange={(e) => setconfirmedPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="submit"
                            value="Submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;