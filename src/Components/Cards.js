import React, { useState } from 'react'
import cardImage1 from '../Images/portfolio-card-img-1.jpeg';
import Model from "./Model";
// import Card from './Card';
const Cards = (props) => {
    let data = props.data;
    console.log("data in cards file",data )
    const [showModel, setShowModel] = useState(false);
  return (
    <div className='grid grid-cols-2'>
        {data.data.map((work) => {
            return (
            <div className="" onClick={setShowModel(true)}>
                <div className="rounded-lg bg-[#fff0f0] p-6 border-[#212425]">
                    <div className="overflow-hidden rounded-lg">
                        <div>
                            <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src={cardImage1} alt="work"/>
                        </div>
                    </div>
                    <span className="pt-5 text-[14px] font-normal text-gray-lite block">
                        {work.category}
                    </span>
                    <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] mt-2">
                        {work.name}
                    </h2>
                    {/* {work.githubLink}
                    {work.description}
                    {work.preview} */}
                </div>
            </div>
                // <Card 
                //     key={course.id} 
                //     course={course} 
                //     likedCourses={likedCourses} 
                //     setlikeCourses={setlikeCourses}
                // />
            )
        })}
        <Model
        isVisible={showModel}
        onclose={() => {
          setShowModel(false);
        }}
      />
    </div>
  )
}

export default Cards