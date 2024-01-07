// import { useState } from "react";
import React,{useState} from "react";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export default function ContactForm({textTheme,btnTheme,sidebarTextTheme}) {
  const { handleSubmit, register } = useForm();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");
  const createResponse = async (data) => {
    const work=await fetch(`${process.env.REACT_APP_BASE_URL}/submitResponse`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({...data})
    });
    const res = await work.json();
    setSubmittedMessage(res.data.message); // Assuming the API returns a message
    setIsFormSubmitted(true);
    console.log(res);
  };
  return (
    <div className={`form-wrapper mt-5 ${btnTheme}`} style={{padding: "15px",borderRadius: "20px",}}>
      {isFormSubmitted?(
        <div className="text-center">
          <h2 className={`${sidebarTextTheme} text-xl font-bold mb-4`}>Thank you for contacting me!</h2>
          <p className={`${sidebarTextTheme} text-sm`}>As per your Message "{submittedMessage}" please check your mail for further Contact.</p>
        </div>
      ):(
      <form onSubmit={handleSubmit(createResponse) } className="mt-8">
        <div className=" text-black">
          <div className="relative z-0 w-full  mb-8 group">
              <input type="text" id="name" name="name" {...register("name")}
              className={` ${textTheme} block autofill:bg-transparent py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none  focus:outline-none focus:ring-0 focus:border-[#FF6464] peer`}
              placeholder=" " required={true} />
              <label for="name"
              className={`peer-focus:font-medium absolute text-sm ${sidebarTextTheme} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8`}>
                Name * 
              </label>
          </div>
          <div class="relative z-0 w-full mb-8 group">
            <input type="email" name="email" {...register("email")}
            className={`block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm ${textTheme} bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none  focus:outline-none focus:ring-0 focus:border-[#5185D4] peer`}
            placeholder=" " id="email" required={true} />
            <label for="email"
            className={`peer-focus:font-medium ${sidebarTextTheme} absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8`}>
              Email * 
            </label>
          </div>
          <div class="relative z-0 w-full mb-8 group">
            <input type="text" name="message" {...register("message")}
            className={`block py-2.5 px-0 w-full text-sm ${textTheme} bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer`}
            placeholder=" " id="message" required={true} />
            <label for="message"
            className={`peer-focus:font-medium absolute text-sm ${sidebarTextTheme} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8`}>
              Message * </label>
          </div>
          <div>
          <input type="submit"
            class={` ${sidebarTextTheme} px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent `}
            value="Submit" />
          </div>
        </div>
    </form>
    )}
      
    </div>
  );
}