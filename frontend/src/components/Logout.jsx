import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout =()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null,

            })
            localStorage.removeItem("Users")
            toast.success("Logout success")
            window.location.reload();
        }catch(error){
            toast.error("Error:"+error.message)

        }
    };
  return (
    <div>
      <button className="text-white bg-red-500 rounded-md px-3 py-2 cursor-pointer" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
