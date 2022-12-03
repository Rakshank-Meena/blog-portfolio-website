import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Modal=({postDetail})=>{
    const[detail,setDetail]=useState({text:'',
    image:''})
    
    const det=JSON.parse(localStorage.getItem(postDetail))
 
    const detailSet=()=>{
        if (det!==null){
            setDetail(det);
        }
        
    } 
    useEffect(detailSet,[det,setDetail,detail])
    
    
    return(
        <>
       <input type="checkbox" id="recent-posts" className="modal-toggle" />
                                <label htmlFor="recent-posts" className="modal cursor-pointer backdrop-blur-sm">
                                    <div className="modal-box bg-white  relative" >
                                        <label htmlFor="recent-posts" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <div className=" w-full h-266 bg-white px-4 py-2 mb-2 sm:w-auto">
                                                <div  className="h-60 text-black text-2xl font-semibold border border-white" style={{fontFamily:`'Roboto', sans-serif`}}>
                                                    {detail.text}
                                                </div>
                                                <div >
                                                    <div className="flex w-5/6 mt-3.5">
                                                        <div className="grid flex-grow h-10 white text-base  text-gray-900">12th Feb,2022</div> 
                                                        <div className="divider divider-horizontal text-gray-900 w-min border-l-2 h-6 border-gray-400"></div> 
                                                        <div className="grid flex-grow h-10 white text-base text-gray-900 ">Patten,design</div> 
                                                    </div>
                                                </div>
                                                <div className="w-auto h-117 text-gray-900">
                                                    <p>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="modal-action">
                                                <Link to={`/work/${postDetail}`}><label htmlFor="my-modal" className="btn btn-primary">View full post</label></Link>
                                            </div>
                                    </div>
                                </label>
        </>
    )
}
export default Modal;