import aboutIcon1 from "../Images/about-icon-1.svg";
import aboutIcon5 from "../Images/about-icon-5.svg";
import aboutIcon6 from "../Images/about-icon-6.svg";
import Footer from "../Components/Footer";
import Sidebar from "./Sidebar";
function About({
  contentTheme,
  borderColor,
  designBg,
  managementBg,
  webBg,
  sidebarTextTheme,
  textTheme,
  btnTheme,
  whiteBg
}) {
  return (
    <div className={`lg:rounded-2xl ${contentTheme}`}>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className={`after-effect after:top-[50%] after:left-52 ${textTheme}`}>About Me</h2>
        <div className="lg:hidden">
          <Sidebar contentTheme={contentTheme}
              btnTheme={btnTheme}
              borderColor={borderColor}
              whiteBg={whiteBg}
              textTheme={textTheme}
              sidebarTextTheme={sidebarTextTheme}/>
        </div>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className={`${sidebarTextTheme} leading-7`}>
                I'm Web developer. I enjoy turning
                complex problems into simple, beautiful and intuitive designs.
              </p>
              <p className={`${sidebarTextTheme} leading-7 mt-2.5`}>
                My aim is to bring across your message and identity in the most
                creative way. I created many project that you can see on my work page and It will happy for Me to build your beautifull Website. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h3 className={`text-[35px] font-bold font-robotoSlab pb-5 ${textTheme}`}>
          What I do !
        </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div className={`about-box  ${designBg}`}>
            <img
              className="w-10 h-10 object-contain block"
              src={aboutIcon1}
              alt="icon"
            />
            <div className="space-y-2">
              <h3 className={`text-[22px] ${textTheme}`}>Simple basic Ui Design</h3>
            </div>
          </div>
          <div className={`about-box ${webBg}`}>
            <img
              className="w-10 h-10 object-contain block"
              src={aboutIcon6}
              alt="icon"
            />
            <div className="space-y-2">
              <h3 className={`text-[22px] ${textTheme}`}>Web Developement</h3>
            </div>
          </div>
          <div className={`about-box ${managementBg}`}>
            <img
              className="w-10 h-10 object-contain block"
              src={aboutIcon5}
              alt="icon"
            />
            <div className="space-y-2">
              <h3 className={`text-[22px] ${textTheme}`}>Management</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default About;
