import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Cards from "./Cards";
import Footer from "./Footer";
function Work() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getAllWorks`,
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
    <div className={`lg:rounded-2xl`}>
      Work
      <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
        <div className="py-12">
          <h2 className="after-effect after:left-48 lg:mt-0">Portfolio</h2>
        </div>
        <div className="min-h-[50vh] relative ml-[-10px] -mr-[10px]">
          <Cards data={data} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Work;
