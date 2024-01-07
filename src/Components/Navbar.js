import React from "react";
import logo from "../Images/logoport.png";
import { IoIosMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
function Navbar({toggleSettingsClick,isSelected,btnColor,toggleMobileMenu,mobileMenu,mobilebgcolor,mobilenavcolor,sectionBg}) {
  return (
    <div className={`${sectionBg}`}>
      <div className="w-full flex justify-between px-4">
        <div className="flex items-center">
          <a href="/">
            <img className="h-[26px] bg-transparent lg:h-[32px]" src={logo} alt="Krishna"/>
          </a>
        </div>
        <div className="flex items-center">
          <div className="flex items-center " onClick={toggleSettingsClick}>
            {isSelected ? (
              <button className={`dark-light-btn hover:bg-[hsl(349,85%,59%)] hover:text-white  ${btnColor} `}>
                <IoIosMoon/>
              </button>
            ) : (
              <button className={`dark-light-btn hover:bg-[rgb(239,64,96)] hover:text-white  ${btnColor}`}>
                <FaSun/>
              </button>
            )}
          </div>
          <div className="flex lg:hidden lg:w-[50px] ml-[0.75rem] transition-all duration-300 cursor-pointer rounded-[9999px] items-center bg-white hover:bg-[rgb(239,64,96)] hover:text-white " onClick={toggleMobileMenu}>
            {!mobileMenu ? (
              <button className={`dark-light-btn`}>
                <TfiMenu/>
              </button>
            ):(
              <button className={`dark-light-btn`}>
                <AiOutlineClose />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {mobileMenu?(
        <nav className="lg:hidden">
        <ul className={`${mobilebgcolor} block rounded-b-[20px] shadow-md absolute left-0 top-[4rem] max-[1024px]:top-20 z-[2222222222222222222] w-full`}> 
          <li>
            <NavLink style={({ isActive }) =>(isActive ? {color:'rgb(250,82,82)'} : {})} to="/" className={`${mobilenavcolor} md:px-[1rem] flex cursor-pointer items-center py-[0.625rem] pl-[1rem] text-[0.8125rem] font-[500] transition-all duration-300 `}>
              <span className="text-xl mr-2">
                <FaUser />
              </span>
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) =>(isActive ? {color:'rgb(250,82,82)'} : {})} to="resume" className={` ${mobilenavcolor} md:px-[1rem] flex cursor-pointer items-center py-[0.625rem] pl-[1rem] text-[0.8125rem] font-[500] text-[rgb(250,82,82)] transition-all duration-300 `}>
              <span className="text-xl mr-2">
                <HiOutlineDocumentText />
              </span>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) =>(isActive ? {color:'rgb(250,82,82)'} : {})} to="work" className={`${mobilenavcolor} md:px-[1rem] flex cursor-pointer items-center py-[0.625rem] pl-[1rem] text-[0.8125rem] font-[500] text-[rgb(250,82,82)] transition-all duration-300 `}>
              <span className="text-xl mr-2">
                < IoBriefcase/>
              </span>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) =>(isActive ? {color:'rgb(250,82,82)'} : {})} to="contact" className={`${mobilenavcolor} md:px-[1rem] flex cursor-pointer items-center py-[0.625rem] pl-[1rem] text-[0.8125rem] font-[500] text-[rgb(250,82,82)] transition-all duration-300 `}>
              <span className="text-xl mr-2">
                <RiContactsBookUploadFill />
              </span>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      ):(
        <div className="hidden"></div>
      )
      }
    </div>
  );
}

export default Navbar;
