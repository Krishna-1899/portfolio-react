import React from "react";
import { GrNotes } from "react-icons/gr";
import { IoCodeSlash } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import cardImage1 from "../Images/portfolio-card-img-1.jpeg";

function Model({onClose,isVisible,dataInModel,contentTheme,borderColor,webBg,textTheme,designBg,sidebarTextTheme,resumeText,resumeWorking}){
    const work=dataInModel;

    if(!isVisible) return null;
    const handleClose=(e)=>{
        if(e.target.id==="wrapper") onClose();
    };
    return (
        <div className={`fixed inset-0 w-full h-full p-[20px] z-[10000] bg-black bg-opacity-75`} id="wrapper" onClick={handleClose}>
            <div className={`!max-w-[800px] min-[1024px]:w-[850px] min-[768px]:w-[83.333%] p-[2rem] mx-auto ${contentTheme} rounded-xl`}>
                <div className="overflow-y-scroll max-h-[60vh] lg:max-h-[80vh] ">
                    <h2 className="text-[#ef4060] text-4xl text-center font-bold">{work.category}</h2>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 my-6 pr-3`}>
                        <div className="space-y-2">
                            <p className={`flex gap-1 ${textTheme} items-center text-[15px] sm:text-lg`}><GrNotes className="min-[640px]:text-lg text-white min-[640px]:block min-[768px]:text-xl mr-4 hidden "/>Project: <span className="font-medium">{work.name}</span></p>
                            <p className={`flex gap-1 ${textTheme} items-center text-[15px] sm:text-lg`}><IoCodeSlash  className="min-[640px]:text-lg  min-[640px]:block min-[768px]:text-xl mr-4 hidden "/>Languages: <span className="font-medium">{work.languages}</span></p>
                        </div>
                        <div className="space-y-2">
                            <p className={`flex gap-1 ${textTheme} items-center text-[15px] sm:text-lg`}><FaGithub className="min-[640px]:text-lg  min-[640px]:block min-[768px]:text-xl mr-4 hidden "/>Github: <span className="font-medium"><a target="blank" className="hover:text-[#FA5252] items-center text-sm transition-all duration-200 " href={work.githubLink}>{work.githubLink}</a></span></p>
                            <p className={`flex gap-1 ${textTheme} items-center text-[15px] sm:text-lg`}><FaExternalLinkAlt  className="min-[640px]:text-lg  min-[640px]:block min-[768px]:text-xl mr-4 hidden "/>Preview: <span className="font-medium"><a href={work.preview} target="blank" className="hover:text-[#FA5252] transition-all duration-200">https://{work.name}.com</a></span></p>
                        </div>
                    </div>
                    <p className={`font-normal text-[20px] max-[640px]:text-sm ${textTheme} `}>{work.description}</p>
                    {work.image ?(
                        <div className="p-3">
                            <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src={work.image} alt="portfolio"/>
                        </div>
                    ):(
                        <div className="p-3">
                            <img className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src={cardImage1} alt="portfolio"/>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}
export default Model;