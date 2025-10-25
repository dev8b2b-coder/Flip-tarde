import React from "react";
import Title from "../../Uiux/Title";
import Discription from "../../Uiux/Discription";
import Image from "next/image";
import accountchooseleft from "../../../../../public/images/accountchooseleft.webp";
const Accountchoose = () => {
  return (
    <div className="bg-white">
      <div className="inn_container">
        <div className="grid grid-col-1 text-center lg:text-start lg:grid-cols-2">
          <Title
            title="Get Started Easily"
            color="text-secondary"
            hovercolor="gradient_text_title"
          />
          <div className="flex justify-center items-center">
            <Discription
              dispription={`Essential features designed for new traders—simple, <br/> transparent, and ready for your first trade.`}
              color="text-ternary"
            />
          </div>
        </div>
      </div>
      <div className="h-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-12">
          <div className="h-max hidden lg:block">
            <Image
              src={accountchooseleft}
              alt=""
              width={3000}
              height={500}
              className="w-[85%]"
            />
          </div>
          <div className="pe-[3%] lg:pe-[15%] xl:pe-[20%] 2xl:pe-[25%]  lg:pt-12 hidden lg:block">
            <div className="pt-2 xl:pt-6 w-max ms-auto">
              <div className="relative z-[1]">
                <Title title={"01"} color={"text-secondary"} />
              </div>
              <div className="shadow-[0_-15px_20px_-16px_#11111145,0_15px_16px_-15px_#11111145] w-max px-12 py-6 relative top-[-30px] z-[2]">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-center lg:text-start">
                  Low barrier to entry
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Just a small deposit to begin trading.
                </p>
              </div>
            </div>
            <div className="pt-2 xl:pt-6 w-max ps-[10%]">
              <div className="relative z-[1]">
                <Title title={"02"} color={"text-secondary"} />
              </div>
              <div className="shadow-[0_-15px_20px_-16px_#11111145,0_15px_16px_-15px_#11111145] w-max px-12 py-6 relative top-[-30px] z-[2]">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-center lg:text-start">
                  Simple cost structure
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  No hidden commissions, clear spreads.
                </p>
              </div>
            </div>
            <div className="pt-2 xl:pt-6 w-max relative left-[-15%]">
              <div className="relative z-[1]">
                <Title title={"03"} color={"text-secondary"} />
              </div>
              <div className="shadow-[0_-15px_20px_-16px_#11111145,0_15px_16px_-15px_#11111145] w-max px-12 py-6 relative top-[-30px] z-[2]">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-center lg:text-start">
                  Flexibility
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Suits traders exploring forex, indices, commodities, crypto{" "}
                  <br /> and more under the FlipTrade platform.
                </p>
              </div>
            </div>
          </div>
          <div className=" inn_container lg:hidden grid md:grid-cols-2">
            <div className="pt-2 xl:pt-6 ">
              <div className="relative z-[1]">
                <Title title={"01"} color={"text-secondary"} />
              </div>
              <div className="shadow-[0_-15px_20px_-16px_#11111145,0_15px_16px_-15px_#11111145] px-12 py-6 relative top-[-30px] z-[2]">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-center lg:text-start">
                  Low barrier to entry
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Just a small deposit to begin trading.
                </p>
              </div>
            </div>
            <div className="pt-2 xl:pt-6 ps-[10%]">
              <div className="relative z-[1]">
                <Title title={"02"} color={"text-secondary"} />
              </div>
              <div className="shadow-[0_-15px_20px_-16px_#11111145,0_15px_16px_-15px_#11111145] px-12 py-6 relative top-[-30px] z-[2]">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-center lg:text-start">
                  Simple cost structure
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  No hidden commissions, clear spreads.
                </p>
              </div>
            </div>
            <div className="pt-2 xl:pt-6 relative">
              <div className="relative z-[1]">
                <Title title={"03"} color={"text-secondary"} />
              </div>
              <div className="shadow-[0_-15px_20px_-16px_#11111145,0_15px_16px_-15px_#11111145] px-12 py-6 relative top-[-30px] z-[2]">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-center lg:text-start">
                  Flexibility
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Suits traders exploring forex, indices, commodities, crypto{" "}
                  <br /> and more under the FlipTrade platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountchoose;
