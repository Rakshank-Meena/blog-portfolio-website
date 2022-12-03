import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <div className="navbar bg-white h-navbar">
            <div className="flex-1">
            </div>
            <div className="flex-none hamburger sm:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                        <label className="btn btn-ghost text-black">
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        </label>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Blog</Link></li>
                        <li><Link to={'/work'}>Work</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <ul className="sm:flex flex-row justify-evenly w-2/6 absolute right-20 text-xl text-gray-900 font-bold hidden">
                    <li><Link to={'/'}>Blog</Link></li>
                    <li><Link to={'/work'}>Work</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Navbar;