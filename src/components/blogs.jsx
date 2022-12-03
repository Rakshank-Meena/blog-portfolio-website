import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Footer from "./footer";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";


const Blogs=()=>{
    const {id}=useParams()
    const[postData,setPostData]=useState({
        text:'',
        tags:[],
        image:''
    })
    const fetch=()=>{
        axios.get(
            `https://dummyapi.io/data/v1/post/${id}`,
            {
                headers:{
                    'app-id':'638aa636904b75d69e10e94f'
                }
            }
        ).then(response=>{
            setPostData(response.data)
            console.log(postData);
        })
    }
    useEffect(fetch,[id,postData])
    return(
        <>
        <div className="min-h-screen max-w-screen bg-white">
            <Navbar/>
            <div className="mt-4 px-12 py-6">
                <div className=" text-gray-900 font-semibold text-capitalize text-3xl" style={{fontFamily:`'Roboto', sans-serif`}}>{postData.text}</div>
                <div className="mt-4">
                    <span className="badge badge-error text-white font-semibold mr-2">2020</span>
                    <span>{postData.tags.map(tag=>(<span className="ml-2 text-capitalize font-semibold text-gray-900 ">{tag}</span>))}</span>
                </div>
                <img src={postData.image} alt='blog' className="mt-4 w-full h-266 object-cover sm:h-500"/>
                <div className="w-auto h-auto">
                    <p className="mt-4 text-gray-900 text-xl ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}
export default Blogs;