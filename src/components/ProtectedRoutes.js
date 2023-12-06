import React from 'react'
import {Navigate} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import { AuthUser } from '../context/AuthContext';
import Login from './Login';
import Signup from './Signup';
function ProtectedRoutes() {
const {user} = AuthUser();

  return  user ? <Outlet/> : <Login/> || <Signup/>

 
}

export default ProtectedRoutes