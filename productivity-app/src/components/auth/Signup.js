


import React from 'react';
import './signup.css'
import '../global/global.css'

const Signup = () => {
  return(

      <>

         <main className='signup__container'>

             
             <form>

               <input type='email' required placeholder='Enter Email here'/>
               <input type='password' required placeholder='Enter Password'/>

               <button type='submit'>Signup</button>
               
             </form>









         </main>
      </>
  )
};

export default Signup;
