import React from 'react'
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form"
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)}   method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/  " className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my-model-3").close()}>✕</Link>
    
    <h3 className="font-bold  my-3 text-2xl">Login</h3>
<div className="mt-4">
    <span>Email</span>
    <br/>
    <input type="text"   placeholder='enter your email' className="rounded-md p-1 text-slate-400 mt-1"  {...register("email", { required: true })}/>
    <br/>
    {errors.email && <span className="text-red-500 text-sm ">This field is required</span>}
</div>
<div className="mt-4">
    <span>Password</span>
    <br/>
    <input type="text"  placeholder='enter your Password' className="rounded-md p-1 text-slate-400 mt-1"  {...register("password", { required: true })}/>
    <br/>
    {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
</div>
<div className="flex justify-around mt-4 text-center content-center items-center">
    <button  className="bg-pink-500 hover:bg-pink-800 rounded-sm mt-2 px-2 py-1">Login</button>
    <p>Not registered ? <Link to="/signup"   className="text-blue-700 underline cursor-pointer">Sign up</Link> </p>
</div>
</form>
</div>
</dialog>
</div>
  )
}

export default Login
