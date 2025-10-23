import React from "react";
import boxbg from "../../../../public/banners/box-bg.webp";
import Image from "next/image";
import copytradingwork from "../../../../public/images/copytradingwork.webp";
import Title from "../Uiux/Title";
const Copytradingwork = () => {
  return (
    <div className="bg-white pt-12 md:pt-18">
      <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${boxbg.src})` }}
      >
        <div className="inn_container grid grid-cols-2 py-12 md:py-18">
          <div className="flex flex-col gap-18 relative left-[7%]">
            <div className="w-max  bg-white ml-auto border-r-[3px] border-black">
              <div className="p-4">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-end">
                  Monitor & Adjust
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Track performance in real time and <br /> modify anytime.
                </p>
              </div>
            </div>
            <div className="w-max  bg-white mx-auto border-r-[3px] border-black">
              <div className="p-4">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-end">
                  Set Your Limits
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Control your investment amount <br /> and risk preferences.
                </p>
              </div>
            </div>
            <div className="w-max bg-white mx-auto border-r-[3px] border-black">
              <div className="p-4">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-end">
                  Follow or Copy
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Choose to follow for insights or <br /> auto-copy their
                  trades.
                </p>
              </div>
            </div>
            <div className="w-max bg-white ml-auto border-r-[3px] border-black">
              <div className="p-4">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-end">
                  Discover Top Traders
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Browse verified trader profiles with performance <br /> stats
                  and risk levels.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative w-max">
              <Image
                src={copytradingwork}
                alt="img"
                width={1000}
                height={500}
                className="max-w-[540px]"
              />

              <div className="absolute w-full h-full top-0 flex justify-center items-center">
                 <div className="w-max ps-16">
                    <Title title={"How It <br/> Works"} color={"text-secondary"} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copytradingwork;
