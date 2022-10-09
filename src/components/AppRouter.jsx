import React, { useContext } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { privatRoutes, publicRoutes } from '../router/router';
import { AuthContext } from '../context';
import BasicExample from './UI/spinner/MySpinner';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <BasicExample />
    }

    return (
        isAuth
            ? 
            <Routes>
                {privatRoutes.map(route => 
                    <Route 
                        element={route.element} 
                        path={route.path}
                        key={route.path}/>
                )}
            </Routes>
            : 
            <Routes>
                {publicRoutes.map(route => 
                    <Route 
                        element={route.element} 
                        path={route.path}
                        key={route.path}/>
                )}
                <Route path="*" element={<Navigate to="/login" replace />}/>
            </Routes>
    );
};

export default AppRouter;