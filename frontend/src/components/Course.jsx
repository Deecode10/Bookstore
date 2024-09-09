import React, { useEffect, useState } from 'react';
import Cards from "./Cards"
import {Link} from "react-router-dom"
import axios from "axios";  
function Course() {
  const[book,setBook] =useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res= await axios.get("http://localhost:4001/book");
        setBook(res.data)



      }
      catch(error){
        console.log("error:",error)

      }
    }
    getBook();
  },[])
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className=" mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-bold md:text-4xl">
          We are the <span className="text-pink-700">Greatest</span>
        </h1>
        <p className="mt-12 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea tempore obcaecati alias. Vitae, non ipsum perspiciatis exercitationem ducimus quis dolores placeat, iure quod veniam quia et fugiat a quisquam doloribus sequi quo esse. Nesciunt cum eaque magnam, esse, autem at tempore quia non, earum tempora et dicta iure voluptates.</p>
        <Link to="/">
        <button className="bg-pink-400 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-800 ">Back </button></Link>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
      {
        book.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
      }
    </div>
    </div>
    </>
  )
}

export default Course
