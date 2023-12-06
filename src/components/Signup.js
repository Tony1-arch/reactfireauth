
import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {AuthUser } from '../context/AuthContext'
import {Alert } from 'react-bootstrap';

function Signup() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate()
 const {createUser} = AuthUser();
   
 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
 
  try {
    await createUser(email,password)
    navigate('/');
  } catch(error){
    setError(error.message)
   
  }
 
 }
  
  return (
    <div className='max-w-[700px] mx-auto my-18 p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>
              Signup to for a free acount 
            </h1>
            <p className='py-3'>
             You have account ? <Link  className='underline' to='/'>Login</Link>
            </p>
        </div>
         <form >
            <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Address</label>
            {error && <Alert variant='danger'>{error}</Alert>}
            <input onChange={(e)=> setEmail(e.target.value)}  type='email'
            className='border p-3 border-blue-400'  placeholder='Type email here ...' />
            </div>
            <div className='flex flex-col py-2'>
            <label  className='py-2 font-medium'>Password</label>
            <input onChange={(e) => setPassword(e.target.value)}  
            className='border p-3' type='password' placeholder='Type password here ...' />
            </div>
            <button  onClick={handleSubmit}className='border-blue-600 bg-blue-400 hover:bg-blue-800 text-white w-full p-4'>Sign up</button>
         </form>
    </div>
  )
}

export default Signup