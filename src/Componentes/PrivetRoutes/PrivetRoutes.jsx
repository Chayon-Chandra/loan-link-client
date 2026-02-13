import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading';

const PrivetRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading) {
        return <Loading></Loading>
    };
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to ="/login"></Navigate>
    );
};

export default PrivetRoutes;