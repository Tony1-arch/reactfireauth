
import React from 'react';
import { Routes,Route} from 'react-router-dom';
import Acount from './components/Acount';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import Signup from './components/Signup';
import About from './components/About';

function App() {
  
  
  return (
     <>
     <h1 className='text-center text-3xl font-bold'>
          firebase Auth & Context API
     </h1>
     
     <Routes>
     <Route  path='/' element={<Login/>}/>
       <Route  element={<ProtectedRoutes/>}>
       <Route  path='/acount' element={<Acount/> }/>
       <Route  path='/about' element={<About/> }/>
       </Route>
       <Route  path='/signup' element={<Signup/>}/>
     </Routes>
    
     
    </> 
   
  )
}

export default App