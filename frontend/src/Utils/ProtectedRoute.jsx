import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({Component}) => {

    const faffyDuckCookie = Cookies.get('faffyDuck');
    return (
    
        faffyDuckCookie ?  <Component /> : <Navigate to='/login' />
      
    );
}

export default ProtectedRoute;
