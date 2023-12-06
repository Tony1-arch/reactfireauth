import React from 'react'
import { AuthUser } from '../context/AuthContext'
import {Link} from 'react-router-dom'
function Acount() {
  const {user, logOut} = AuthUser();
  console.log(user)

  const handleLogout =  async() =>{
  try{
   await logOut()
  }catch (error){
    console.log(error.message)
  }
  }
  return (

    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <Link  className='underline' to='/about'>About us</Link>
     <h1 className='text-2xl font-bold py-4'> Account <br/>{user && user.email}</h1>
     <button onClick={handleLogout} className='border bg-blue-400 hover:bg-blue-800 px-6 py-2 my-4'> Logout</button>
    </div>
  )
}

export default Acount