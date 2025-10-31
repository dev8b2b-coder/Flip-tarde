import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import newgencardbg from "../../../../public/images/newgencardbg.webp";
import mainbanner from "../../../../public/images/nextgenbg.webp";
import Image from "next/image";
const Nextgennew = () => {
  return (
    <div className="relative pt-12 md:pt-18 lg:pt-28 xl:pt-38 bg-theme overflow-hidden">
      <div className="relative inn_container mt-12 md:mt-18 text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10 lg:opacity-50 z-[5]"
        >
          <source src="/videos/nextgen-bg.mp4" type="video/mp4" />
        </video>

        <div className="relative ">
          <Image
            src={mainbanner}
            alt="mainbanner"
            width={3000}
            height={500}
            className=""
          />
          <div className="lg:absolute top-0 left-0 w-full h-full z-10">
            <div className="grid grid-col-1 text-center lg:text-start lg:grid-cols-[3fr_2fr]  bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(255,255,255,0)_100%)]">
              <div>
                <Title
                  title="Next-Gen Forex <br/> Trading for Everyone"
                  color="text-white"
                />
              </div>
              <div className="flex justify-center items-center">
                <Discription
                  dispription={`Trade with zero hidden fees, ultra-tight spreads, and lightning-fast execution. FlipTrade gives 
                       you transparent pricing, expert insights, & a stable platform you can trust.`}
                  color="text-white"
                />
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 pt-12 lg:pt-18 gap-x-16 gap-y-12">
               <div className="flex justify-end">
                 <div className="w-[433px] bg-contain bg-no-repeat py-6 " style={{ backgroundImage: `url(${newgencardbg.src})` }}>
                  <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-white min-w-[200px] text-center pb-2">
                    Ultra-Tight Spreads
                  </p>
                  <p className="list_text font-light text-center font_ternary leading-[28px] text-white">
                    Milliseconds matter.
                  </p>
                </div>
               </div>
               <div>
                 <div className="max-w-[433px] bg-contain bg-no-repeat py-6 " style={{ backgroundImage: `url(${newgencardbg.src})` }}>
                  <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-white min-w-[200px] text-center pb-2">
                    Fast Execution
                  </p>
                  <p className="list_text font-light text-center font_ternary leading-[28px] text-white">
                    Milliseconds matter.
                  </p>
                </div>
               </div>
               <div>
                 <div className="max-w-[433px] bg-contain bg-no-repeat py-6 " style={{ backgroundImage: `url(${newgencardbg.src})` }}>
                  <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-white min-w-[200px] text-center pb-2">
                    Ultra-Tight Spreads
                  </p>
                  <p className="list_text font-light text-center font_ternary leading-[28px] text-white">
                    Milliseconds matter.
                  </p>
                </div>
               </div>
               <div className="flex justify-end">
                 <div className="w-[433px] bg-contain bg-no-repeat py-6 " style={{ backgroundImage: `url(${newgencardbg.src})` }}>
                  <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-white min-w-[200px] text-center pb-2">
                    Ultra-Tight Spreads
                  </p>
                  <p className="list_text font-light text-center font_ternary leading-[28px] text-white">
                    Milliseconds matter.
                  </p>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nextgennew;
