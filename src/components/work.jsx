import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

const Work=({fetchData})=>{
    return(
        <>
        <div className="h-auto bg-white">
        <Navbar/>

        <div className="px-5 py-6 text-3xl text-gray-900 font-extrabold mb-3 sm:px-60">
            Works
        </div>
        <div className="w-344 h-auto mx-auto overflow-y-scroll sm:w-682">
            {fetchData.map(
                data=>{
                    return(
                        <ul key={data.id}>
                            <li>
                            <div  className='mb-10 cursor-pointer'  >
                                <Link to={`/work/${data.id}`} >
                                
                                <div className="w-344 h-auto sm:flex sm:w-auto sm:mb-4 " >
                                    <div className="w-339 h-230 bg-gray-500  overflow-hidden sm:w-full "><img src={data.image} className='h-auto w-full object-fill' alt='img'/></div>
                                    <div className="sm:pl-5 ">
                                        <div>
                                            <div className="w-64 h-fit text-2xl text-gray-900 font-bold mt-3 ml-2 sm:w-auto">
                                                <p>{data.text}</p>
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
                                </Link>
                            </div>
                            </li>
                        </ul>
                    )})}
            </div>
        <Footer/>
        </div>
        </>
    )
}
export default Work;