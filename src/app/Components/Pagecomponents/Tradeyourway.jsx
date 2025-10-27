import React from "react";
import Title from "../Uiux/Title";
import tradeyouwaygraf from "../../../../public/images/tradeyouwaygraf.webp";
import tradeyouwayback from "../../../../public/images/tradeyouwayback.webp";
import tradeyouwaysideimage from "../../../../public/images/tradeyouwaysideimage.webp";
import Image from "next/image";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import downloadicon from "../../../../public/icons/downloadicon.svg";
import Faq from "./Faq";
import Yourway from "./Yourway";
const faqData = [
  {
    question: "What is FlipTrade?",
    answer:
      "A secure trading platform for Forex, stocks, commodities, indices, and crypto."
  },
  {
    question: "How do I start trading?",
    answer: "Sign up, verify your account, deposit funds, and begin trading."
  },
  {
    question: "What are the fees?",
    answer: "Transparent, low trading fees with no hidden charges."
  },
  {
    question: "Is FlipTrade safe?",
    answer: "Yes, we use strong security, 2FA, and safe fund storage."
  },
  {
    question: "How can I get support?",
    answer: "Via live chat, email, or our Help Center guides."
  }
];

const Tradeyourway = () => {
  return (
    <div className="bg-white">
      <div className="">
        <Yourway />
        <div>
          <div className="inn_container pt-20 md:pt-12 lg:pt-18 xl:pt-24">
            <div className="text-center">
              <Title
                title={`Frequently Asked <br/> Questions`}
                color="text-secondary"
              />
            </div>
            <Faq faqData={faqData} />
          </div>
          <div
            className="bg-cover bg-center inn_container"
            style={{ backgroundImage: `url(${tradeyouwayback.src})` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr]">
              <div>
                <Image
                  src={tradeyouwaysideimage}
                  alt="Side banner"
                  width={2000}
                  height={500}
                  className="max-w-[550px] md:max-w-[unset] m-auto w-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-center lg:text-start pt-12 md:pt-0 px-5 md:px-0">
                  <Title
                    title={`Trade on the Go <br/> Anytime and <br/> Anywhere`}
                    color="text-secondary"
                  />
                  <p className="pt-4" />
                  <Discription
                    dispription={`Trade with us from anywhere, anytime, on <br/> desktop and mobile devices with MT5's <br/> deep liquidity and ultra-fast execution.`}
                    color="text-ternary"
                  />
                </div>

                {/* <div className="pt-14 hidden md:flex w-full flex-col items-center">
                  <div className="flex gap-4 lg:gap-8">
                    <Button
                      btn_name={`Download on <strong> iOS </strong>`}
                      icon={downloadicon.src}
                      btn_bg={`bg-primary`}
                      text_color="text-white"
                      border_color="border-primary"
                      shadow={true}
                    />
                    <Button
                      btn_name={`Download on <strong> Android </strong>`}
                      icon={downloadicon.src}
                      btn_bg={`bg-primary`}
                      text_color="text-white"
                      border_color="border-primary"
                      shadow={true}
                    />
                  </div>
                  <div className="flex pt-6 gap-4 lg:gap-8 lg:ps-[15%]">
                    <Button
                      btn_name={`Download on <strong> Mac </strong>`}
                      icon={downloadicon.src}
                      btn_bg={`bg-primary`}
                      text_color="text-white"
                      border_color="border-primary"
                      shadow={true}
                    />
                    <Button
                      btn_name={`Download on <strong> Windows </strong>`}
                      icon={downloadicon.src}
                      btn_bg={`bg-primary`}
                      text_color="text-white"
                      border_color="border-primary"
                      shadow={true}
                    />
                  </div>
                </div> */}
                {/* Button section for mobile  */}
                {/* <div className="pt-6 flex md:hidden gap-4 w-full flex-col items-center max-w-[300px] m-auto">
                  <div className="flex w-full justify-start">
                    <Button
                      btn_name={`Download on <strong> iOS </strong>`}
                      icon={downloadicon.src}
                      btn_bg={`bg-primary`}
                      text_color="text-white"
                      border_color="border-primary"
                      shadow={true}
                    />
                  </div>
                  <div className="flex w-full justify-end">
                    <Button
                      btn_name={`Download on <strong> Android </strong>`}
                      icon={downloadicon.src}
                      btn_bg={`bg-primary`}
                      text_color="text-white"
                      border_color="border-primary"
                      shadow={true}
                    />
                  </div>
                  <div className="flex w-full justify-start">
                    <Button
                      btn_name={`Download on <strong> Mac </strong>`}
                      icon={downloadicon.src}
                      btn_bg={`bg-primary`}
                      text_color="text-white"
                      border_color="border-primary"
                      shadow={true}
                    />
                  </div>
                  <div className="flex w-full justify-end">
                    <Button
                      btn_name={`Download on <strong> Windows </strong>`}
                      icon={downloadicon.src}
                      btn_bg={`bg-primary`}
                      text_color="text-white"
                      border_color="border-primary"
                      shadow={true}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tradeyourway;
