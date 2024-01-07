import React, { useState } from "react";
import cardImage1 from "../Images/portfolio-card-img-1.jpeg";
import Model from "./Model";
// import Card from './Card';
function Cards({ data ,contentTheme,borderColor,webBg,textTheme,designBg,sidebarTextTheme,resumeText,resumeWorking, }) {
  const [showModel, setShowModel] = useState(false);
  const [dataInModel,setDataInModel]=useState([]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
      {data.data.map((work) => {
        return (
          <div key={work._id} className={``} onClick={()=>{
                setShowModel(true)
                setDataInModel(work)
            }} >
            <div className={`rounded-lg p-6 ${designBg} border-[rgb(33,36,37)] `}>
              <div className="overflow-hidden rounded-lg">
                <div>
                  <img
                    className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                    src={cardImage1}
                    alt="work"
                  />
                </div>
              </div>
              <span className={`pt-5 text-[14px] font-normal block ${sidebarTextTheme}`}>
                {work.category}
              </span>
              <h2 className={`${textTheme} font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] mt-2`}>
                {work.name}
              </h2>
            </div>
          </div>
        );
    })}
    <Model isVisible={showModel} onClose={()=>{setShowModel(false)}} dataInModel={dataInModel} contentTheme={contentTheme} borderColor={borderColor} designBg={designBg} sidebarTextTheme={sidebarTextTheme} textTheme={textTheme} webBg={webBg} resumeText={resumeText} resumeWorking={resumeWorking}  />  
    </div>

  );
}

export default Cards;
