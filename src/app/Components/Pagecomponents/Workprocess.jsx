import React from "react";
import Title from "../Uiux/Title";
import Image from "next/image";
import workflowround from "../../../../public/images/workflowround.webp";
export default function Workprocess() {
  return (
    <div className="bg-theme">
      <div className="inn_container relative pt-18 pb-32">
        <div className="max-w-[750px] m-auto relative">
          <Image
            src={workflowround}
            alt="workflowround"
            width={1000}
            height={500}
            className="w-full"
          />
          <div className="absolute top-0 w-full h-[78%] flex justify-center items-center ">
            <h3 className="text-5xl text-white h-max">
              In Just
              <br />
              <span className="text-[130px] leading-[130px] text-subprimary">
                3
              </span>
              <br />
              Easy Steps
            </h3>
          </div>
        </div>

        <div className="flex gap-8 items-center absolute top-[25%]">
          <div>
            <h3 className="text-[130px] leading-[130px] text-white">A)</h3>
          </div>
          <div>
            <p className="text-xl lg:text-2xl xl:text-3xl  2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-start gradient_text pb-3 leading-[inherit]">
              Set Up Your <br /> Account
            </p>
            <span className="list_text font-light text-center font_ternary leading-[28px] text-white">
              Begin trading online with just <br /> your basic contact details
            </span>
          </div>
        </div>
        <div className="flex gap-8 items-center absolute top-[25%] right-0">
          <div>
            <h3 className="text-[130px] leading-[130px] text-white">B)</h3>
          </div>
          <div>
            <p className="text-xl lg:text-2xl xl:text-3xl  2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-start gradient_text pb-3 leading-[inherit]">
              Easy Funding
            </p>
            <span className="list_text font-light text-center font_ternary leading-[28px] text-white">
              Securely deposit and withdraw <br /> using convenient local <br />{" "}
              solutions
            </span>
          </div>
        </div>
        <div className="flex gap-8 items-center absolute bottom-[15%] left-[30%]">
          <div>
            <h3 className="text-[130px] leading-[130px] text-white">c)</h3>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xl lg:text-2xl xl:text-3xl  2xl:text-4xl lg:leading-[35px]  font-medium text-primary text-start gradient_text pb-3 leading-[inherit]">
              Start <br /> Trading
            </p>
            <span className="list_text font-light text-center font_ternary leading-[28px] text-white">
              Start trading on your live account <br /> and Access +2000
              instruments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
