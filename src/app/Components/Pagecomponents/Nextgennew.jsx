import React from "react";
import nextgenbg from "../../../../public/images/nextgenbg.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import newgencardbg from "../../../../public/images/newgencardbg.webp";
const Nextgennew = () => {
  return (
    <div className="pt-12 md:pt-18 lg:pt-28 xl:pt-38 bg-white">
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${nextgenbg.src})` }}
      >
        <div className="inn_container pt-12 md:pt-18">
          <div className="grid grid-col-1 text-center lg:text-start lg:grid-cols-[3fr_2fr]">
            <Title
              title="Next-Gen Forex <br/> Trading for Everyone"
              color="text-white"
            />
            <div className="flex justify-center items-center">
              <Discription
                dispription={`Trade with zero hidden fees, ultra-tight spreads, <br/> and lightning-fast execution. FlipTrade gives <br/>
                       you transparent pricing, expert insights, & <br/> a stable platform you can trust.`}
                color="text-white"
              />
            </div>
          </div>
          <div className="grid grid-col-1 lg:grid-cols-2 pt-12 md:pt-18 xl:pt-24  pb-18 md:pb-24 lg:pb-28  xl:pb-40 ">
            <div>
              <div className="flex items-center">
                <h4 className="text-[145px] leading-[145px] gradient_text">
                  1
                </h4>
                <div
                  className="w-max h-max px-16 py-10 bg-cover"
                  style={{ backgroundImage: `url(${newgencardbg.src})` }}
                >
                  <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-white min-w-[200px] text-start xl:text-center pb-2 2xl:pb-3 ">
                    Exclusive Insights
                  </p>
                  <p className="list_text font-light text-center font_ternary leading-[28px] text-white">
                    Signals & analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-40">
              <div className="flex items-center justify-end">
                <div
                  className="w-max h-max px-16 py-10 bg-cover"
                  style={{ backgroundImage: `url(${newgencardbg.src})` }}
                >
                  <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-white min-w-[200px] text-start xl:text-center pb-2 2xl:pb-3 ">
                    Fast Execution
                  </p>
                  <p className="list_text font-light text-center font_ternary leading-[28px] text-white">
                    Milliseconds matter.
                  </p>
                </div>
                <h4 className="text-[145px] leading-[145px] gradient_text">
                  2
                </h4>
              </div>
            </div>
            <div className="pt-16">
              <div className="flex items-center">
                <h4 className="text-[145px] leading-[145px] gradient_text">
                  3
                </h4>
                <div
                  className="w-max h-max px-16 py-10 bg-cover"
                  style={{ backgroundImage: `url(${newgencardbg.src})` }}
                >
                  <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-white min-w-[200px] text-start xl:text-center pb-2 2xl:pb-3 ">
                    Ultra-Tight Spreads
                  </p>
                  <p className="list_text font-light text-center font_ternary leading-[28px] text-white">
                    Milliseconds matter.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-56">
              <div className="flex items-center justify-end">
                <div
                  className="w-max h-max px-16 py-10 bg-cover"
                  style={{ backgroundImage: `url(${newgencardbg.src})` }}
                >
                  <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-white min-w-[200px] text-start xl:text-center pb-2 2xl:pb-3 ">
                    Transparent Pricing
                  </p>
                  <p className="list_text font-light text-center font_ternary leading-[28px] text-white">
                    No hidden costs.
                  </p>
                </div>
                <h4 className="text-[145px] leading-[145px] gradient_text">
                  4
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nextgennew;
