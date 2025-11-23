import React, { use } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import Loading from '../Components/Loading';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { data, loading } = use(AuthContext);
    
    if (loading) return <Loading />
    if (data) return children;

    return <Navigate state={location?.pathname} to={'/login'} />;
};

export default PrivateRoute;