import React from "react";
import { Input, Heading,Button } from "@chakra-ui/react";
import "./Navbar.css";


const Navbar = ()=>{


  return (
    <>
    <div className="navbar">
      <div><img src="https://productschool.com/_next/static/media/logo-1__dark.88e7797d.svg" alt=""/> </div>
      <div>  <Input placeholder='Search courses...' size='sm' /></div>
      <div>
        <span>COURSES</span>
        <span>AI COURSES</span>
        <span>FULL STACK COURSE</span>
        <span>DEEP LEARNING COURSES</span>
      </div>
      <div><Button>SIGN IN</Button></div>
    </div>



    </>

  )
}

export default Navbar;