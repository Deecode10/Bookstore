import React from 'react'
import Navfile from '../components/Navfile'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses() {
  return (
    <div>
      <Navfile/>
      <div className="min-h-screen">
      <Course/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Courses
