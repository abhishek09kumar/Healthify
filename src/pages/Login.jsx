import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <form className="min-h-[80vh] flex flex-col items-center dark:bg-gray-900 text-white">
      <div className='my-20'> 
      <div className="dark:bg-gray-700  rounded-lg py-10 px-32 ">
      <div >
        <p className='text-center mb-4 font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
      </div>
      {state==="Sign Up" && <div className="mb-4">
        <p className=''>Full Name</p>
        <input 
          type="text" 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          className='text-gray-700 p-1 rounded bg-gray-100'
          required 
        />
      </div>}
      <div className="mb-4">
        <p>Email</p>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          className='text-gray-700 p-1 rounded bg-gray-100'
          required 
        />
      </div>
      <div className="mb-4">
        <p>Password</p>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          className='text-gray-700 p-1 rounded bg-gray-100'
          required 
        />
      </div>
      <button 
        type="submit" 
        className="bg-teal-600 text-white p-1 text-base rounded   px-11    mt-4"
      >
        {state === 'Sign Up' ? 'Create Account' : <p  className='text-center mx-9'>Login</p>}
      </button>
       { state=== "Sign Up"? <p className='mt-1 text-sm  text-gray-200'>already have an account ? <span className='cursor-pointer' onClick={()=>setState('Login')}>Login </span> </p>
        : <p className='mt-1 text-sm  text-gray-200'>create a new account? <span className='cursor-pointer' onClick={()=>setState('Sign Up')}>click here</span></p>  }
      </div>
      </div>
    </form>
  );
}

export default Login;
