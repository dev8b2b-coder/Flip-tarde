import React from "react";
import ecousebanner from "../../../../public/images/ecousebanner.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Link from "next/link";
import Button from "../Uiux/Button";
import Image from "next/image";
function Economicuse() {
  return (
    <div className="bg-white">
      <div className="inn_container">
        <div className="pt-16 hidden xl:block">
          <div className="relative">
            <Image
              src={ecousebanner.src}
              alt="banner"
              width={3000}
              height={500}
              className="w-full"
            />
            <div className="absolute top-[24%] right-[4.5%]  2xl:right-[6.5%]">
              <div className="">
                <Title
                  title={`How It <br/> Helps You`}
                  color="gradient_text"
                />
                <div className="pt-4">
                  <Discription
                    dispription={`Use the calendar to avoid being caught off <br/> guard, manage risks during high-impact <br/> events, and spot new opportunities when <br/> market outcomes differ from expectations.`}
                    color="text-white"
                  />
                </div>
                <div className="pt-10">
                  <Link
                    href={
                      "https://client.fliptradegroup.com/trader/registration"
                    }
                  >
                    <Button
                      btn_name={`Start Trading with FlipTrade`}
                      btn_bg="gradient_bg"
                      text_color="text-secondary"
                      border_color="border-transparent"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Economicuse;
