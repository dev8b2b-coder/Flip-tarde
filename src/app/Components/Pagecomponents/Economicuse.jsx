import React from "react";
import ecousebanner from "../../../../public/images/ecousebanner.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Link from "next/link";
import Button from "../Uiux/Button";
import Image from "next/image";
import boxbg from "../../../../public/banners/box-bg.webp";
import joint from "../../../../public/images/joint.webp";
const data = [
  {
    id: 1,
    title: "Track Global Events",
    description:
      "Stay updated on key economic <br/> releases from major economies."
  },
  {
    id: 2,
    title: "Forecast vs Reality",
    description:
      "See how actual results compare <br/> with market expectations."
  },
  {
    id: 3,
    title: "Impact Levels",
    description:
      "Quickly identify events with high, <br/> medium, or low market impact."
  },
  {
    id: 4,
    title: "Smarter Trade Planning",
    description:
      "Prepare your strategies around <br/> upcoming market movements."
  }
];

function Economicuse() {
  return (
    <div className="bg-white">
      <div className="md:py-12">
        <div
          className="bg-cover py-12 md:py-18"
          style={{ backgroundImage: `url(${boxbg.src})` }}
        >
          <div className="inn_container">
            <div className="text-center lg:text-start pb-8 md:pb-0">
              <Title title={"Why Use It?"} color="text-secondary" />
            </div>
            <div className=" max-w-[800px] 2xl:max-w-[961px] m-auto relative">
              {data.map((data, index) =>
                <div
                  className={`flex ${index % 2 === 0
                    ? " justify-center md:justify-end"
                    : " justify-center md:justify-start"} ${index === 1 ? "ps-[8%]" : ""}`}
                  key={index}
                >
                  <div
                    className={`flex flex-col items-center md:items-[unset] md:flex-row ${index % 2 === 0
                      ? " "
                      : " md:flex-row-reverse"}  w-max max-w-[450px]  md:max-w-[700px] lg:max-w-[unset] gap-3 md:gap-8 lg:gap-12 p-4 2xl:p-6 rounded-4xl`}
                  >
                    <div
                      className={`text-[32px] 2xl:text-[45px] w-[100px] lg:w-[120px] 2xl:w-[155px] h-[100px] lg:h-[120px] 2xl:h-[155px] justify-center relative z-[2] rounded-[50%] ${index %
                        2 ===
                      0
                        ? "bg-primary"
                        : "bg-subprimary"}  font_ternary text-white flex items-center`}
                    >
                      0{data.id}
                    </div>
                    <div
                      className={`flex flex-col justify-center  gap-3 ${index %
                        2 ===
                      0
                        ? "items-center md:items-start lg:items-[unset]"
                        : "md:items-end items-center lg:items-[unset]"}`}
                    >
                      <h5
                        className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium ${index %
                          2 ===
                        0
                          ? "text-primary"
                          : "text-subprimary"}`}
                      >
                        {data.title}
                      </h5>
                      <span
                        className={`list_text font-light font_ternary  max-w-[400px]  ${index %2 === 0 ? 
                          'text-center md:text-start lg:max-w-[unset]'
                        :
                       'text-center md:text-end lg:max-w-[unset]'
                      } md:text-[unset] leading-6 xl:leading-[28px]`}
                        dangerouslySetInnerHTML={{ __html: data.description }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="hidden xl:block absolute z-[1] top-[12%] 2xl:top-[14%] left-[44%]">
                <Image
                  src={joint}
                  alt=""
                  width={1000}
                  height={500}
                  className="max-w-[140px] 2xl:max-w-[165px]"
                />
              </div>
               <div className="hidden xl:block absolute z-[1] top-[37%] 2xl:top-[39%] left-[48%] 2xl:left-[46%] rotate-[69deg]">
                <Image
                  src={joint}
                  alt=""
                  width={1000}
                  height={500}
                  className="max-w-[140px] 2xl:max-w-[165px]"
                />
              </div>
                <div className="hidden xl:block absolute z-[1] top-[63%] 2xl:top-[64%] left-[48%] 2xl:left-[46%]">
                <Image
                  src={joint}
                  alt=""
                  width={1000}
                  height={500}
                  className="max-w-[140px] 2xl:max-w-[165px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
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
    </div>
  );
}

export default Economicuse;
