import React from "react";
import pipvaluebanner from "../../../../public/images/ecogetstart.webp";
import Image from "next/image";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import fireicon from "../../../../public/icons/firebtnicon.svg";
const Economicgetstart = () => {
  return (
    <div className="bg-white">
      <div className="inn_container py-12 md:py-18 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_4fr]">
          <div>
            <Image
              src={pipvaluebanner}
              alt="side image"
              width={1500}
              height={500}
              className="max-w-[650px] w-[70%] lg:w-[90%] m-auto"
            />
          </div>
          <div className="flex items-center justify-center lg:justify-start pt-12 lg:pt-0 text-center lg:text-start">
            <div className="ps-[6%]">
              <Title
                title="Get Started with <br /> FlipTrade’s  <br />  Economic Calendar"
                color="text-secondary"
              />
              <div className="pt-2">
                <Discription
                  dispription="Filter events by country, category, or impact level, <br /> set your time zone, and stay prepared with <br /> FlipTrade’s real-time economic calendar."
                  color="text-ternary"
                />
              </div>
              {/* <div className="pt-8">
                <Button
                  btn_name="View Full Calendar"
                  icon={fireicon}
                  border_color="border-primary"
                  btn_bg="bg-primary"
                  shadow={true}
                  text_color="text-white"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Economicgetstart;
 
