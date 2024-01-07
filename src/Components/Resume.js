import { FaGraduationCap } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import Footer from "../Components/Footer";

function Resume({contentTheme,borderColor,designBg,textTheme,sidebarTextTheme,photographyTwoBg,webBg,resumeText,resumeWorking}){
    return(
        <div className={`${contentTheme} lg:rounded-2xl`}>
            <div className="container max-[992px]:max-w-[992px] sm:px-5 md:px-10 lg:px-14 mx-auto"> 
                <div className="py-12 px-4 md:px-0">
                    <h2 className={`after-effect after:top-[50%] after:left-44 ${textTheme}`}>Resume</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2
                        gap-x-6 gap-y-6 mt-[30px]">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <span className="text-4xl text-[#F95054]"><FaGraduationCap/></span>
                                    <h4 className={`text-[1.625rem] font-medium ${textTheme}`}>Education</h4>
                                </div>
                                <div className={`${photographyTwoBg} border-[#212425] py-4 pl-5 pr-3 space-y-2 mb-6
                                rounded-lg`}>
                                    <span className={`text-tiny text-gray-lite ${sidebarTextTheme}`}>2019</span>
                                    <h3 className={`text-xl ${textTheme} `}>Class 10</h3>
                                    <p className={`${resumeText}`}>KV3 AF-2 Jamnagar</p>
                                </div>
                                <div className={`${photographyTwoBg} border-[#212425] py-4 pl-5 pr-3 space-y-2 mb-6
                                rounded-lg`}>
                                    <span className={`text-tiny text-gray-lite ${sidebarTextTheme}`}>2021</span>
                                    <h3 className={`text-xl ${textTheme} `}>Class 12</h3>
                                    <p className={`${resumeText}`}>KV3 AF-2 Jamnagar</p>
                                </div>
                                <div className={`${photographyTwoBg} border-[#212425] py-4 pl-5 pr-3 space-y-2 mb-6
                                rounded-lg`}>
                                    <span className={`text-tiny text-gray-lite ${sidebarTextTheme}`}>2021-present</span>
                                    <h3 className={`text-xl ${textTheme} `}>Pursuing BE in computer Science</h3>
                                    <p className={`${resumeText}`}>LDRP Institute of Technology and Research,Gandhinagar</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <span className="text-4xl text-[#F95054]">
                                    <IoBriefcase/>
                                    </span>
                                    <h4 className={`text-[1.625rem] font-medium ${textTheme} ` }>Experience</h4>
                                </div>
                                <div className={`${webBg} border-[#212425] py-4 pl-5 pr-3 space-y-2 mb-6
                                rounded-lg`}>
                                    <span className={`text-tiny text-gray-lite ${sidebarTextTheme}`}>Present</span>
                                    <h3 className={`text-3xl ${textTheme} `}>Fresher in </h3>
                                    {/* <p className={`${resumeText}`}></p> */}
                                </div>
                                <div className={`${webBg} border-[#212425] py-4 pl-5 pr-3 space-y-2 mb-6
                                rounded-lg`}>
                                    {/* <span className={`text-tiny text-gray-lite ${sidebarTextTheme}`}>2015 - 2017</span> */}
                                    <h3 className={`text-xl ${textTheme} `}>Frontend Using React and Redux</h3>
                                    {/* <p className={`${resumeText}`}>ib-themes ltd.</p> */}
                                </div>
                                <div className={`${webBg} border-[#212425] py-4 pl-5 pr-3 space-y-2 mb-6
                                rounded-lg`}>
                                    {/* <span className={`text-tiny text-gray-lite ${sidebarTextTheme}`}>2008</span> */}
                                    <h3 className={`text-xl ${textTheme} `}>Backend Using (Node js)</h3>
                                    {/* <p className={`${resumeText}`}>Online Typodev Solution Ltd.</p> */}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className={`container max-[992px]:max-w-[992px] ${resumeWorking} py-12 px-2 sm:px-5 
            md:px-10 lg:px-20`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="col-span-1">
                        <h4 className={`text-3xl font-medium mb-6 ${textTheme}`}>Frontend Skills</h4>
                        <div className="mb-5">
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold text-[#526377]">HTMl</span>
                                <span className="font-semibold text-[#526377]">95%</span>
                            </div>
                            <div className="w-full bg-[#edf2f2] rounded-full h-1">
                                <div className="bg-[#FF6464] h-1 rounded-full" style={{width:'95%'}}></div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold text-[#526377]">CSS</span>
                                <span className="font-semibold text-[#526377]">85%</span>
                            </div>
                            <div className="w-full bg-[#edf2f2] rounded-full h-1">
                                <div className="bg-[#9272d4] h-1 rounded-full" style={{width:'85%'}}></div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold text-[#526377]">JavaScript</span>
                                <span className="font-semibold text-[#526377]">75%</span>
                            </div>
                            <div className="w-full bg-[#edf2f2] rounded-full h-1">
                                <div className="bg-[#5185d4] h-1 rounded-full" style={{width:'75%'}}></div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold text-[#526377]">React</span>
                                <span className="font-semibold text-[#526377]">75%</span>
                            </div>
                            <div className="w-full bg-[#edf2f2] rounded-full h-1">
                                <div className="bg-[#ca56f2] h-1 rounded-full" style={{width:'75%'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                    <h4 className={`text-3xl font-medium mb-6 ${textTheme}`}>Backend Skills</h4>
                    {/* <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                        <button className={`resume-btn ${contentTheme} ${sidebarTextTheme}`}>Digital Design</button>
                        <button className={`resume-btn ${contentTheme} ${sidebarTextTheme}`}>Marketing</button>
                        <button className={`resume-btn ${contentTheme} ${sidebarTextTheme}`}>Social Media</button>
                        <button className={`resume-btn ${contentTheme} ${sidebarTextTheme}`}>Time Management</button>
                        <button className={`resume-btn ${contentTheme} ${sidebarTextTheme}`}>Flexibilty</button>
                        <button className={`resume-btn ${contentTheme} ${sidebarTextTheme}`}>Print</button>
                        <button className={`resume-btn ${contentTheme} ${sidebarTextTheme}`}>Communication</button>
                    </div> */}
                    <div className="mb-5">
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold text-[#526377]">Node Js</span>
                                <span className="font-semibold text-[#526377]">70%</span>
                            </div>
                            <div className="w-full bg-[#edf2f2] rounded-full h-1">
                                <div className="bg-[#FF6464] h-1 rounded-full" style={{width:'70%'}}></div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold text-[#526377]">Mongoose</span>
                                <span className="font-semibold text-[#526377]">70%</span>
                            </div>
                            <div className="w-full bg-[#edf2f2] rounded-full h-1">
                                <div className="bg-[#9272d4] h-1 rounded-full" style={{width:'70%'}}></div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold text-[#526377]">Sequelize</span>
                                <span className="font-semibold text-[#526377]">70%</span>
                            </div>
                            <div className="w-full bg-[#edf2f2] rounded-full h-1">
                                <div className="bg-[#5185d4] h-1 rounded-full" style={{width:'70%'}}></div>
                            </div>
                        </div>
                        {/* <h4 className={`text-3xl font-medium mb-6 ${textTheme}`}>Database</h4> */}
                        <div className="mb-5">
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold text-[#526377]">MongoDb , SQl</span>
                                <span className="font-semibold text-[#526377]">80%</span>
                            </div>
                            <div className="w-full bg-[#edf2f2] rounded-full h-1">
                                <div className="bg-[#ca56f2] h-1 rounded-full" style={{width:'80%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Resume;