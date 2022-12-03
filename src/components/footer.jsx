import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer=()=>{
    return(
        <>
        <footer className="footer footer-center p-10 bg-white h-128  mt-4"> 
            <div>
                <div className="grid grid-flow-col gap-5 text-slate-900 ">
                <a href="/"><FacebookIcon/></a>
                <a href="/"><InstagramIcon/></a>
                <a href="/"><TwitterIcon/></a>
                <a href="/"><LinkedInIcon/></a>
                </div>
            </div> 
            <div className="text-slate-900">
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
        
        </>
    )
}
export default Footer;