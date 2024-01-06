import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoBriefcase } from "react-icons/io5";
import { FaBlogger } from "react-icons/fa";
import { RiContactsBookUploadFill } from "react-icons/ri";
import {
    Routes,
    Route,
} from "react-router-dom";
import About from '../Components/About.js';
import Resume from "../Components/Resume";
import Contact from "../Components/Contact";
import Work from "../Components/Work";  
import '../App.css';

function Menubar ({borderColor,  contentTheme, btnTheme , navboxBtn, designBg, appDevelopemntBg, photographyOneBg , photographyTwoBg , managementBg, webBg,textTheme,sidebarTextTheme,whiteBg,resumeText,resumeWorking}) {
    return(
        <>
        <header className={`lg:w-[460px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] ${contentTheme}`}>
              <nav className="hidden lg:block">
                <ul className="flex">
                  <li>
                    <NavLink style={({ isActive }) => 
                      (isActive ? {backgroundImage: 'linear-gradient(to right, #dd2476, #fa5252)', color:'white'} : {backgroundolor: 'rgb(243 246 246)'})} to="/" className={`menu-item ${btnTheme} ${navboxBtn}`}>
                      <span className="text-xl mb-1">
                        <FaUser />
                      </span>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={({ isActive }) => 
                      (isActive ? {backgroundImage: 'linear-gradient(to right, #dd2476, #fa5252)', color:'white'} : {backgroundolor: 'rgb(243 246 246)'})} to="resume" className={`menu-item ${btnTheme} ${navboxBtn}`}>
                      <span className="text-xl mb-1">
                        <HiOutlineDocumentText />
                      </span>
                      Resume
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={({ isActive }) => 
                      (isActive ? {backgroundImage: 'linear-gradient(to right, #dd2476, #fa5252)', color:'white'} : {backgroundolor: 'rgb(243 246 246)'})} to="work" className={`menu-item ${btnTheme} ${navboxBtn}`}>
                      <span className="text-xl mb-1">
                        <IoBriefcase />
                      </span>
                      Works
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink style={({ isActive }) => 
                      (isActive ? {backgroundImage: 'linear-gradient(to right, #dd2476, #fa5252)', color:'white'} : {backgroundolor: 'rgb(243 246 246)'})} to="blog" className={`menu-item ${btnTheme} ${navboxBtn}`}>
                      <span className="text-xl mb-1">
                        <FaBlogger />
                      </span>
                      Blogs
                    </NavLink>
                  </li> */}
                  <li>
                    <NavLink style={({ isActive }) => 
                      (isActive ? {backgroundImage: 'linear-gradient(to right, #dd2476, #fa5252)', color:'white'} : {backgroundolor: 'rgb(243 246 246)'})} to="contact" className={`menu-item ${btnTheme} ${navboxBtn}`}>
                      <span className="text-xl mb-1">
                        <RiContactsBookUploadFill />
                      </span>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </header>
            <div className="lg:rounded-2xl md:rounded-2xl">
            <div>
              <Routes>
                <Route path="/" element={<About contentTheme={contentTheme} borderColor={borderColor} designBg={designBg} appDevelopemntBg={appDevelopemntBg}
                photographyOneBg={photographyOneBg} photographyTwoBg={photographyTwoBg} managementBg={managementBg} webBg={webBg} sidebarTextTheme={sidebarTextTheme} textTheme={textTheme} btnTheme={btnTheme} whiteBg={whiteBg}/>} />
                <Route path="resume"  element={<Resume contentTheme={contentTheme} borderColor={borderColor} designBg={designBg} sidebarTextTheme={sidebarTextTheme} textTheme={textTheme} photographyTwoBg={photographyTwoBg} webBg={webBg} resumeText={resumeText} resumeWorking={resumeWorking}/>} />
                <Route path="work" element={<Work />} />
                <Route path="contact"  element={<Contact contentTheme={contentTheme}/>} />
              </Routes>
            </div>
            </div>
        </>
    )
}
export default Menubar;