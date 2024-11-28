import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { BiLogoInstagram } from "react-icons/bi";

const GetInTouchCard = () => {
    return (
        <div className="card bg-white rounded-lg p-6 col-span-1 md:col-span-2">
            <h4 className="font-bold card-content border-b-2 mb-2 border-gray-300" >Get In Touch</h4>
            <div className="flex justify-center space-x-8 text-sm text-gray-500 card-content-syne">

                <div className="card-content-syne p-1 rounded-full border text-gray">
                    <a href="https://www.linkedin.com/in/pavankumar-sidagam" target="_blank" className="text-xl border-gray-600"><TiSocialLinkedin /></a>
                </div>

                <div className="card-content-syne p-1 rounded-full border text-gray">
                    <a href="https://github.com/pavankumarsidagam" target="_blank" className="text-xl border-gray-600"><AiFillGithub /></a>
                </div>
                <div className="card-content-syne p-1 rounded-full border text-gray">
                    <a href="mailto:pavankumarsidagam1@gmail.com?subject=Hey%20Favan!%20Let%27s%20Catch%20Up%20😄" className="text-xl border-gray-600"><IoIosMail /></a>
                </div>
                <div className="card-content-syne p-1 rounded-full border text-gray">
                    <a href="https://www.instagram.com/001.12.9?igsh=MmUycWZ5a3Z2dXg3" className="text-xl border-gray-600"><BiLogoInstagram /></a>
                </div>
                
            </div>
        </div>
    );
};

export default GetInTouchCard