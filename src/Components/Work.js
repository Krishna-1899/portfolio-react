import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Cards from "./Cards";
import Footer from "./Footer";
function Work({contentTheme,textTheme,borderColor,designBg,sidebarTextTheme,resumeText,resumeWorking,webBg}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/v1/getAllWorks`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className={`lg:rounded-2xl ${contentTheme}` }>
      <div className="container max-[992px]:max-w-[992px] sm:px-5 md:px-10 lg:px-14 mx-auto">
        <div className="py-12 px-4 md:px-0">
          <h2 className={`lg:mt-0 after-effect after:top-[50%] after:left-44 ${textTheme}`}>Portfolio</h2>
          <div className="">
            <Cards data={data} contentTheme={contentTheme} webBg={webBg} borderColor={borderColor} designBg={designBg} sidebarTextTheme={sidebarTextTheme} textTheme={textTheme} resumeText={resumeText} resumeWorking={resumeWorking} />
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
export default Work;
