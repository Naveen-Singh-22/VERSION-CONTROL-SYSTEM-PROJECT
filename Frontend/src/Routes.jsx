import React, { useEffect } from "react";
import React from "react";
import {useNavigate, useRoutes} from 'react-router-dom';

// Pages List
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/user/Profile";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

//Auth Context
import { useAuth} from "./authContext";

const ProjectRoutes = () => {

    const { currentUser, setCurrentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const userIdFromStorage = localStorage.getItem("userId");
        if(!currentUser) navigate('/login')
    }, [currentUser]);



}    

