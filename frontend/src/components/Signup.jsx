import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
  <div className="flex items-center h-screen justify-center">
  <div className="border-[2px] shadow-md p-5 rounded-md">
  <div className="model-box">
    <form onSubmit={handleSubmit(onSubmit)}   method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold  my-3 text-2xl">Sign up</h3>
    <div className="mt-4">
    <span>Name</span>
    <br/>
    <input type="text" placeholder='enter your name' className="rounded-md p-1 text-slate-400 mt-1" {...register("name", { required: true })}/>
    <br/>
    {errors.name && <span className="text-red-500 text-sm ">This field is required</span>}
</div>
<div className="mt-4">
    <span>Email</span>
    <br/>
    <input type="text" placeholder='enter your email' className="rounded-md p-1 text-slate-400 mt-1" {...register("email", { required: true })}/>
    <br/>
    {errors.email && <span className="text-red-500 text-sm ">This field is required</span>}
</div>
<div className="mt-4">
    <span>Password</span>
    <br/>
    <input type="text" placeholder='enter your Password' className="rounded-md p-1 text-slate-400 mt-1" {...register("password", { required: true })}/>
    <br/>
    {errors.password && <span className="text-red-500 text-sm ">This field is required</span>}
</div>
<div className="flex justify-around mt-4 text-center content-center items-center ">
    <button className="bg-pink-500  hover:bg-pink-800 rounded-sm mt-2 px-2 mr-6 py-1">Sign up</button>
    <p>Have account? <button onClick={()=>document.getElementById("my_modal_3").showModal()} className="text-blue-700 underline cursor-pointer">Login</button><Login/> </p>
</div>
</form>
  </div>
</div>
 
  </div>
  </>
  )
}

export default Signup
