import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Modal2=({featuredPost})=>{
    const[detail,setDetail]=useState({text:'',
    image:''})
    
    
    const det=JSON.parse(localStorage.getItem(featuredPost))

    const detailSet=()=>{
        if (det!==null){
            setDetail(det);
        }
    } 
    useEffect(detailSet,[det,setDetail,detail])
    
    
    return(
        <>
        <input type="checkbox" id="featured-work" className="modal-toggle" />
        <label htmlFor="featured-work" className="modal cursor-pointer backdrop-blur-sm">
            <label className="modal-box relative w-max h-max bg-white" htmlFor="">
                <label htmlFor="featured-work" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                
                <div className="w-344 h-auto sm:flex sm:w-auto sm:mb-4 " >
                                    <div className="w-339 h-230 bg-gray-500  overflow-hidden"><img src={detail.image} className='h-auto w-full' alt='img'/></div>
                                    <div className="sm:pl-5 ">
                                        <div>
                                            <div className="w-64 h-fit text-2xl text-gray-900 font-bold mt-3 ml-2 sm:w-auto">
                                                <p>{detail.text}</p>
                                            </div>
                                            <div className="w-1/2 flex flex-row justify-between mt-2 px-1 sm:w-44">
                                                <div><span className="badge bg-slate-900 h-7 px-3">2020</span></div>
                                                <div className="text-lg">Dashboard</div>
                                            </div>
                                        </div>

                                        <div className="w-344 h-96 text-gray-900 mt-3 px-2 sm:w-auto">
                                            <p>
                                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                <div className="modal-action">
                    <Link to={`/work/${featuredPost}`}><label htmlFor="my-modal" className="btn btn-primary">View full post</label></Link>
                </div>
            </label>    
        </label>
        </>
    )
}
export default Modal2;















