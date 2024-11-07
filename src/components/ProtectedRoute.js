import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import { UseUser } from '../context/UseUser';

export default function ProtectedRoute() {
    const {user} = UseUser()
    if (!user || !user.token) return <Navigate to='/signin'/>
    return <Outlet />
}