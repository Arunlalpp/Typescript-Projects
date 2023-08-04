import React from "react";

function ContentsUI() {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-slate-900 font-semibold text-base"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-slate-900 font-extrabold text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Arun lal <br />
              Software Developer
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentsUI;
