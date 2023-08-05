import React, { useEffect, useState } from "react";

import defaultPortfolioData from "./data";

const recentData = ["all", "Web-design", "UX-Design"];

function Portfolio() {
  const [nextItem, setNextItem] = useState(6);
  const [portfolios, setPortfolios] = useState(defaultPortfolioData);
  const [selectTab, setSelectTab] = useState("all");

  const handleShowMore = () => {
    setNextItem((prev) => prev + 3);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(defaultPortfolioData);
    }
    if (selectTab === "web-design") {
      const filterData = defaultPortfolioData.filter(
        (items) => items.category === "web-design"
      );
      setPortfolios(filterData);
    }
    if (selectTab === "web-design") {
      const filterData = defaultPortfolioData.filter(
        (items) => items.category === "UX"
      );
      setPortfolios(filterData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-blue-900 text-[2rem] font-bold">
              My recent projects
            </h3>
          </div>
          <div className="flex gap-3">
            {recentData.map((buttonText) => (
              <button
                className="text-blue-900 border border-solid border-blue-700 py-2 px-4 rounded-lg"
                onClick={() => setSelectTab(`asada${buttonText}`)}
              >
                {buttonText}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios.slice(0, nextItem).map((portfolio, index) => (
            <div
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos="fade-zoom-in"
              key={index}
            >
              <figure>
                <img src={portfolio.imgUrl} alt="" className="rounded-lg " />
              </figure>
              <div className="w-full h-full bg-violet-400 bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button className="text-white bg-blue-900 hover:bg-blue-700 py-2 px-4 rounded-lg font-medium ease-in duration-200">
                    See more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItem < portfolios.length && defaultPortfolioData.length > 6 && (
            <button
              className="text-white bg-blue-900 hover:text-blue-700 py-2 px-4 rounded-lg font-medium ease-in duration-200"
              onClick={handleShowMore}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
