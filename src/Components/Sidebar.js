import avtar from "../Images/portfolio-avtar-image.png";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FiSmartphone } from "react-icons/fi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import download from "../Images/portfolio-download-img.png";
// import { useState , useEffect } from "react";
// import '../Components/sidebar.css';
function Sidebar ({whiteBg, borderColor, contentTheme, btnTheme,textTheme,sidebarTextTheme}) {
    return (
        <div
        className={` ${contentTheme} w-full mb-6 lg:mb-0 mx-auto relative text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 `}>
        <img
          src={avtar}
          className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto 
          rounded-[20px] -mt-[140px]"
          alt="about"
        />
        <div className={`pt-[100px] pb-8`}>
          <h2
            className={`mt-6 mb-1 font-[600] text-[26px] dark:text-white ${textTheme}`}
          >
            Krishna Bhanushali
          </h2>
          <h3
            className={`mb-4 text-[#7B7B7B] ${btnTheme} inline-block px-5 py-1.5 rounded-lg`}
          >
            Web Developer
          </h3>
          <div className="flex justify-center space-x-3">
            <a href="#" target="_blank">
              <span className={`socialbtn ${btnTheme} text-[#1773EA]`}>
                <RiFacebookFill />
              </span>
            </a>
            <a href="#" target="_blank">
              <span className={`socialbtn ${btnTheme} text-pink`}>
              <FaGithub />
              </span>
            </a>
            <a href="#" target="_blank">
              <span className={`socialbtn ${btnTheme} text-[#1773EA]`}>
                <RiLinkedinFill />
              </span>
            </a>
          </div>
          <div className={`p-7 rounded-2xl mt-7 ${btnTheme}`}>
            <div className={`flex border-b pb-2.5 ${borderColor}`}>
              <span
                className={`socialbtn ${whiteBg} text-darkPink shadow-md`}>
                <FiSmartphone />
              </span>
              <div className="text-left ml-2.5">
                <p className={`text-xs ${sidebarTextTheme}`}>Phone</p>
                <p className={`${textTheme}`}>+ 123 456 7890</p>
              </div>
            </div>
            <div className={`flex border-b ${borderColor} py-2.5`}>
              <span
                className={`socialbtn ${whiteBg} text-[#6AB5B0] shadow-md`}>
                <FaEnvelopeOpenText />
              </span>
              <div className="text-left ml-2.5">
                <p className={`text-xs ${sidebarTextTheme}`}>Email</p>
                <p className={`${textTheme}`}>example@gmail.com</p>
              </div>
            </div>
            <div className={`flex border-b ${borderColor} py-2.5`}>
              <span
                className={`socialbtn ${whiteBg} text-lightCoral shadow-md`}>
                <IoLocationSharp />
              </span>
              <div className="text-left ml-2.5">
                <p className={`text-xs ${sidebarTextTheme}`}>Location</p>
                <p className={`${textTheme}`}>Hong kong China</p>
              </div>
            </div>
            <div className="flex py-2.5">
              <span
                className={`socialbtn ${whiteBg} text-purple shadow-md`}>
                <SlCalender />
              </span>
              <div className="text-left ml-2.5">
                <p className={`text-xs ${sidebarTextTheme}`}>Birthday</p>
                <p className={`${textTheme}`}>May 27, 1990</p>
              </div>
            </div>
          </div>
          <button className="download-btn">
            <img className="mr-3" src={download}alt="dowload" />
            Download CV
          </button>
        </div>
      </div>
    )
}

export default Sidebar; 