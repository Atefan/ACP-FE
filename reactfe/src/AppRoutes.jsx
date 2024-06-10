import React, { useEffect} from 'react';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import NewRating from "./pages/NewRating";
import History from "./pages/History";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import { Routes, Route } from 'react-router-dom';
import { routes, authenticatedRoutes } from "./constant";
import { useNavigate, useLocation } from 'react-router-dom';
import { getJwtWebStorage } from './configuration/webStorage';
import HistorySelect from "./pages/HistorySelect";



const AppRoutes = () => {
    const location=useLocation();
    const currentPath=location.pathname;
    const navigate=useNavigate();

    useEffect(() =>{
        if(!getJwtWebStorage() && authenticatedRoutes.includes(currentPath))
        {
            navigate(routes.signIn);
        }
    }, [getJwtWebStorage()]);

    return (
        <Routes>
            <Route path={routes.signIn} element={<SignIn/>} />
            <Route path={routes.forgotPassword} element={<ForgotPassword />} />
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.newRating} element={<NewRating />} />
            <Route path={routes.history} element={<History />} />
            <Route path={routes.profile} element={<Profile />} />
            <Route path={routes.adminPanel} element={<AdminPanel />} />
            <Route path={routes.historySelect} element={<HistorySelect />} />
        </Routes>
    );
}

export default AppRoutes;