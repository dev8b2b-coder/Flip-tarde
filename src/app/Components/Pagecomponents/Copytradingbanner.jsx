import React from "react";
import copytradingbanner from "../../../../public/banners/copytradingbanner.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
import SocialTradingright from "../../../../public/images/Social-Tradingright.webp";
const Copytradingbanner = () => {
  return (
    <div
      className=""
      style={{ backgroundImage: `url(${copytradingbanner.src})` }}
    >
      <div className="inn_container pt-40 pb-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col justify-center text-center lg:text-start">
            <Title
              title={"Become a Fliptrade <br/> IB Partner"}
              color={"gradient_text"}
            />
            <div className="py-6">
              <Discription
                dispription={
                  "Earn commissions by referring traders to Fliptrade <br /> simple, transparent, and rewarding."
                }
                color={"text-[#D0D0D0]"}
              />
            </div>
            <Button
              btn_name="Join Now"
              border_color="border-primary"
              btn_bg={"bg-primary"}
              shadow={true}
              text_color={"text-white"}
              icon={firebtn}
            />
          </div>
          <div className="pt-12 lg:pt-0">
            <Image
              src={SocialTradingright}
              alt="side banner"
              width={1000}
              height={500}
              className="max-w-[90%] m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copytradingbanner;
