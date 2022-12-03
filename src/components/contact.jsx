import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Contact=()=>{
    return(
        <div className="bg-white max-w-screen h-auto overflow-hidden">
        <div className="min-h-screen h-auto w-screen bg-white">
            <Navbar/>
            <div className="h-full w-screen bg-white sm:h-auto  ">
                <img src="./resume.jpg" alt="resume" className=" w-5/6 sm:w-4/6 h-auto mx-auto"/>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Contact;