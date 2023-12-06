import React from 'react'
import { AuthUser } from '../context/AuthContext'

function About() {
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
     <h1 className='text-2xl font-bold py-4'> Account <br/>{user && user.email}</h1>
     <button onClick={handleLogout} className='border bg-blue-400 hover:bg-blue-800 px-6 py-2 my-4'> Logout</button>
    </div>
  )
}

export default About