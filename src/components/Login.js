import React , {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {AuthUser } from '../context/AuthContext'
import GoogleButton from 'react-google-button'
import {Alert } from 'react-bootstrap';

function Login() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const {logedUser,signinWithGoogle} = AuthUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logedUser(email,password);
      navigate('/acount');
    } catch (error){
      setError(error.message)
    }
   }

   const handleGoogleSignIn = async(e) =>{
    e.preventDefault();
    setError('');
    try {
      await signinWithGoogle() ;
      navigate('/acount');
    } catch (error){
      setError(error.message)
    }
   };
  return (
    
    <div className='max-w-[700px] mx-auto my-18 p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>
              Sign into your acount
            </h1>
            <hr/>
              <div>
              <GoogleButton onClick={handleGoogleSignIn} />
            </div>
            <p className='py-3'>
             You dont have account ? <Link  className='underline' to='/signup'>Sign up</Link>
            </p>
        </div>
         <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
          
            <label className='py-2 font-medium'>Email Address</label>
            {error && <Alert variant='danger'>{error}</Alert>}
            <input  onChange={(e)=> setEmail(e.target.value)} className='border p-3 border-blue-400' type='email' placeholder='Type email here ...' />
            </div>
            <div className='flex flex-col py-2'>
            <label  className='py-2 font-medium'>Password</label>
            <input  onChange={(e) => setPassword(e.target.value)}  className='border p-3' type='password' placeholder='Type password here ...' />
            </div>
            
           
            <button className='border-blue-600 bg-blue-400 hover:bg-blue-800 text-white w-full p-4'>Login</button>
         </form>
       
    </div>
  )
}

export default Login