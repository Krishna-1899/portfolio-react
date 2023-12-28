// import { useState } from "react";
import React ,{useEffect} from "react";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  const createResponse = async () => {
    const api=`${process.env.REACT_APP_BASE_URL}/getAllWorks`;
    console.log(api)
    const work=await fetch(`${process.env.REACT_APP_BASE_URL}/getAllWorks`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await work.json();
    console.log(res)
    // const savedUserResponse = await fetch(
    //   `${process.env.REACT_APP_BASE_URL}/submitResponse`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ ...data }),
    //   }
    // );
    // console.log("FORM RESPONSE......", savedUserResponse);
  };
  useEffect(() => {
    createResponse();
  },[]);
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [Message , setMessage] = useState('');
    // const handleChange = (data) => {
    //     setName(data.name);
    //     setEmail(data.email);
    //     setMessage(data.Message);
    //     console.log(data);
    // }
  // const {register,handleSubmit,formState:{ errors }} = useForm();
  // console.log(errors);
  return (
    <div
      className="form-wrapper mt-5"
      style={{
        backgroundColor: "rgb(248 251 251)",
        padding: "15px",
        borderRadius: "20px",
      }}
    >
      {/* <form onSubmit={handleSubmit(createResponse)}> */}
        {/* name input */}
        {/* <div className="relative z-0 w-full mt-[40px] mb-8 group">

          <input
             onChange={handleChange}
            {...register("name", { required:true})}
            id="name-input"
            type="text"
            className="block py-2.5 px-0 w-full text-sm
                        text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5]
                        "
            placeholder="Name *"
          />
        </div> */}
        {/* email input */}
        {/* <div className="relative z-0 w-full mt-[40px] mb-8 group">
          <input
            onChange={handleChange}
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            id="email-input"
            type="text"
            className="block py-2.5 px-0 w-full text-sm
                        text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5]
                        "
            placeholder="Email *"
          />
        </div> */}
        {/* message input */}
        {/* <div className="relative z-0 w-full mt-[40px] mb-8 group">
          <input onChange={handleChange}
            {...register("Message", { required: true })}
            id="message-input"
            type="text"
            className="block py-2.5 px-0 w-full text-sm
                        text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5]
                        "
            placeholder="Message *"
          />
        </div> */}
        {/* Submit button */}
        {/* <input
          type="submit"
          className="submit-btn px-6 py-2 rounded-lg border-[2px] mt-3
                    border-color-910 font-semibold cursor-pointer justify-items-center items-center"
        /> */}
      {/* </form> */}
      <form onSubmit={handleSubmit(createResponse)} className="mt-8">
        <div className="space-y-5 text-black">
          <div>
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Name{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter You Full Name"
                required={true}
                {...register("name")}
              ></input>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Email Id{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="email"
                required={true}
                placeholder="Enter Your Email"
                {...register("email")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Message{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Employee Title"
                {...register("message")}
              ></input>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Submit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
      {/* <div className="information mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Message
                </th>
                
                <th scope="col" className="px-6 py-3">
                  Customize
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  {name}
                </th>
                <td className="px-6 py-4">{email}</td>
                <td className="px-6 py-4">{Message}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}
// import React from 'react'

// function ContactForm() {
//   return (
//     <div>ContactForm</div>
//   )
// }

// export default ContactForm
