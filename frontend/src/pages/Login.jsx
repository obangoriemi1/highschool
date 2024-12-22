import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const onSubmitHandler = async(event) =>{
    event.preventDefault()

  }
  return ( 
    <form className='min-h-[80vh] flex items-center ' onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg ">
        <p className='text-2xl font-semibold'>{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p>Please {state === "Sign Up" ? "Signup" : "login"} to study</p>
        {
          state === "Sign Up" &&  <div className="w-full">
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' onChange={(e) => setName(e.target.value)} value={name} type="text" />
        </div>
        }
       
        <div className="w-full">
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' onChange={(e) => setEmail(e.target.value)} value={email} type="email" />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base' >{state === "Sign Up" ? "Create Account" : "Login"}</button>
         {state === "Sign Up" ? <p>Already have an account ?
           <span onClick={() => setState("Login")} className='text-green-500 underline cursor-pointer'>Log in here</span></p> : <p>Create a new account ? 
            <span onClick={() => setState("Sign Up")} className='text-green-500 underline cursor-pointer'>click here</span></p>}
      </div>
    </form>
  )
}

export default Login

