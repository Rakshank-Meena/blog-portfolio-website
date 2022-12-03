
import { useState } from "react";
import Footer from "./footer";
import Modal from "./modal";
import Modal2 from "./modal2";
import Navbar from "./navbar";

const Home=({owner,fetchData})=>{
    const[postDetail,setPostDetail]=useState()
    const[featuredPost,setFeaturedPost]=useState()
    return(
        <>
        <div className="h-homepage bg-white sm:h-auto">
            <Navbar/>
            <div className=" mb-8 sm:flex sm:flex-row-reverse sm:justify-between sm:px-36 sm:h-450 sm:mt-10">
                <div className=" h-dpPhone w-dpPhone mx-auto bg-slate-500 mt-8 mb-3.5 rounded-full shadow-picShadow overflow-hidden sm:mx-0 sm:mt-20 sm:h-248 sm:w-248 "><img src={owner.picture} className='h-full w-full' alt={owner.firstName}></img></div>
                <div className="sm:flex sm:flex-col sm:justify-start  ">
                    <div className="sm:flex sm:flex-col-reverse ">
                        <div className="w-312 sm:w-500 h-120 mx-auto  text-gray-900 font-bold flex justify-center items-center sm:items-start flex-col text-3xl sm:text-4xl">
                        <span>Hi,I am ,{owner.firstName}</span>
                        <div className="flex flex-col justify-center items-center sm:mt-3 sm:flex-row ">
                        <span>Creative</span>
                        <span className="sm:ml-3">Technologist</span>
                        </div>
                        </div>

                        <div className="w-328 h-96 text-center mx-auto text-gray-900 mt-3.5 sm:w-500  sm:text-left">
                            <p >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>

                    <div className="mx-auto sm:m-0 w-min mt-5  sm:mr-auto sm:mt-auto sm:mb-10" >
                    <button className="rounded-none w-208 h-47 mt-3.5 btn-error text-xl font-semibold text-white sm:text-shadow">Download Resume</button>
                    </div>
                </div>
                </div>
            
            
            
            <div className=" recent-post mt-2 px-3.5 mx-auto flex flex-col w-full h-647  items-center bg-sky-100 overflow-y-scroll  sm:pl-60 sm:h-max sm:pb-8">
                <div className="w-105 h-60 flex items-center text-gray-800 text-base font-semibold ">
                    <p>Recent Posts</p>
                </div>
                <div className="sm:flex sm:overflow-x-scroll">
                {fetchData.map(
                    data=>{
                        return(
                            <ul key={data.id}>
                                <li>
                                <label htmlFor="recent-posts"  >
                                    <div className=" w-354 h-266 bg-white px-4 py-2 mb-2 sm:mr-3 cursor-pointer" onClick={()=>{return (setPostDetail(data.id))}}>
                                        <div  className="h-60 text-black text-2xl font-semibold border border-white" style={{fontFamily:`'Roboto', sans-serif`}}>
                                        {localStorage.setItem(data.id,JSON.stringify({text:data.text,image:data.image}))}{data.text}
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
                                </label>
                                <Modal  postDetail={postDetail}/>
                                </li>
                            </ul>
                        )
                    }
                )}
                </div>
            </div>
            

            <div className="mx-auto w-32 h-60  flex justify-center items-center text-stone-900">
                <p>Featured Works</p>
            </div>

            <div className="w-344 h-445 mx-auto overflow-y-scroll sm:w-10/12 sm:h-auto">
            {fetchData.map(
                data=>{
                    return(
                        <ul key={data.id}>
                            <li>
                            <label htmlFor='featured-work' className='mb-10'  >
                                <div className="w-344 h-auto sm:flex sm:w-auto sm:mb-4 cursor-pointer" onClick={()=>{return (setFeaturedPost(data.id))}}>
                                    <div className="w-339 h-230 bg-gray-500  overflow-hidden"><img src={data.image} className='h-auto w-full' alt='img'/></div>
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
                            </label>
                            <Modal2 featuredPost={featuredPost}/>
                            </li>
                        </ul>
                    )})}
            </div>

        <Footer/>
        </div>
        
        </>
    )
}
export default Home;