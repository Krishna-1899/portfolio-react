import "./App.css";
// import logo from "./Images/portfolio-navbar-logo.png";
import { useState, useEffect } from "react";
// import { IoIosMoon } from "react-icons/io";
// import { FaSun } from "react-icons/fa";
import Sidebar from "./Components/Sidebar";
import Menubar from "./Components/Menubar";
import Navbar from "./Components/Navbar";
function App() {
  const [isSelected, setIsSelected] = useState(true);
  const [mobileMenu,setMobileMenu]=useState(false);
  const [theme, setTheme] = useState("light");
  const [contentTheme, setContentTheme] = useState("lightTheme");
  const [textTheme,setTextTheme]=useState("lightThemeText");
  const [sidebarTextTheme,setsidebarTextTheme]=useState("sidebarlightText");
  const [btnColor, setBtnColor] = useState("btnLight");
  const [btnTheme, setBtnTheme] = useState("lightBtnTheme");
  const [navboxBtn, setNavboxBtn] = useState("navboxBtnLight");
  const [whiteBg, setWhiteBg] = useState("whiteBg");
  const [borderColor, setBorderColor] = useState("lightBorder");
  const [designBg, setDesignBg] = useState("originalDesignBg");
  const [mobilebgcolor,setmobilebgcolor] = useState("mobilebgcolor");
  const [mobilenavcolor,setmobilenavcolor] = useState("mobilenavcolor");
  const [sectionBg,setSectionBg]=useState("section-bg");
  const [resumeText,setResumeText]=useState("resumeText");
  const [resumeWorking,setresumeWorking]=useState("resumeWorking");
  const [appDevelopemntBg, setAppDevelopementBg] = useState(
    "lightAppDevelopemnet"
  );
  const [photographyOneBg, setPhotographyOneBg] = useState(
    "lightPhotographyOneBg"
  );
  const [photographyTwoBg, setPhotographyTwoBg] = useState(
    "lightPhotographyTwoBg"
  );
  const [managementBg, setManagementBg] = useState("lightManagement");
  const [webBg, setWebBg] = useState("webLight");

  const toggleSettingsClick = () => {
    setIsSelected(!isSelected);
    if (theme === "light") {
      setTheme("dark");
      setBtnColor("btnDark");
      setContentTheme("darkTheme");
      setBtnTheme("darkBtnTheme");
      setNavboxBtn("navboxBtnDark");
      setWhiteBg("blackBg");
      setBorderColor("darkBorder");
      setDesignBg("darkDesignBg");
      setAppDevelopementBg("darkAppDevelopmentBg");
      setPhotographyOneBg("darkPhotographyOneBg");  
      setPhotographyTwoBg("darkPhotographyTwoBg"); 
      setManagementBg("darkManagement");
      setWebBg("webDark");
      setTextTheme("darkThemeText");
      setsidebarTextTheme("sidebardarkText");
      setmobilebgcolor("mobilebgcolordark");
      setmobilenavcolor("mobilenavcolordark");
      setSectionBg("section-bg-dark");
      setResumeText("resumeText");
      setresumeWorking("resumeWorkingDark");
    } else {
      setTheme("light");
      setBtnColor("btnLight");
      setContentTheme("lightTheme");
      setBtnTheme("lightBtnTheme");
      setNavboxBtn("navboxBtnLight");
      setWhiteBg("whiteBg");
      setBorderColor("lightBorder");
      setDesignBg("originalDesignBg");
      setAppDevelopementBg("lightAppDevelopemnet");
      setPhotographyOneBg("lightPhotographyOneBg");
      setPhotographyTwoBg("lightPhotographyTwoBg");
      setManagementBg("lightManagement");
      setWebBg("webLight");
      setTextTheme("lightThemeText");
      setsidebarTextTheme("sidebarlightText");
      setmobilebgcolor("mobilebgcolor");
      setmobilenavcolor("mobilenavcolor");
      setSectionBg("section-bg");
      setResumeText("resumeTextDark");
      setresumeWorking("resumeWorking");
    }
  };

  const toggleMobileMenu=()=>{
    setMobileMenu(!mobileMenu);
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  console.log(theme);
  return (
    <div>
      <div className={`bg-no-repat bg-cover bg-fixed bg-center min-h-screen w-full md:pb-16 mx-0 px-0 ${theme}`}>
        <Navbar toggleSettingsClick={toggleSettingsClick} isSelected={isSelected} btnColor={btnColor} toggleMobileMenu={toggleMobileMenu} mobileMenu={mobileMenu} mobilebgcolor={mobilebgcolor} mobilenavcolor={mobilenavcolor} sectionBg={sectionBg}/>
        <div className="containerL grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
          <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
            {/* Sidebar */}
            <Sidebar
              contentTheme={contentTheme}
              btnTheme={btnTheme}
              borderColor={borderColor}
              whiteBg={whiteBg}
              textTheme={textTheme}
              sidebarTextTheme={sidebarTextTheme}
            />
          </div>
          <div className="col-span-12 lg:col-span-8">
            {/* <About */}
            <Menubar
              contentTheme={contentTheme}
              btnTheme={btnTheme}
              borderColor={borderColor}
              whiteBg={whiteBg}
              navboxBtn={navboxBtn}
              designBg={designBg}
              appDevelopemntBg={appDevelopemntBg}
              photographyOneBg={photographyOneBg}
              photographyTwoBg={photographyTwoBg}
              managementBg={managementBg}
              webBg={webBg}
              sidebarTextTheme={sidebarTextTheme}
              textTheme={textTheme}
              resumeText={resumeText}
              resumeWorking={resumeWorking}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
