// import { useState } from "react"
import ContactForm from "./ContactForm"
import Footer from "../Components/Footer";

function Contact ({contentTheme,textTheme,btnTheme,sidebarTextTheme}) {
   
    return (
        <div className={`${contentTheme} lg:rounded-2xl`}>
            <h2 className={`after-effect after:left-60 after:top-[76px]  mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12 relative ${textTheme}`}>Contact</h2>
            <div className={`mx-4 md:mx-[60px] p-4 md:p-16 ${contentTheme} mb-[30px] md:mb-[60px]`}>
                <h3 className="text-3xl">
                    <span className={`${sidebarTextTheme}`}>I'm always open to discussing
                     product</span>
                    <br></br>
                    <span className={`font-semibold ${textTheme}`}>design work or partnerships.</span>
                </h3>
                <div className="font-semibold mt-3 text-black">Please fill the required fields</div>
                <ContactForm btnTheme={btnTheme} sidebarTextTheme={sidebarTextTheme} textTheme={textTheme}/>
                <div className="mt-8">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Contact