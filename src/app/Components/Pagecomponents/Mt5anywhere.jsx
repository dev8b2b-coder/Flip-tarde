import React from "react";
import boxbg from "../../../../public/banners/box-bg.webp";
import mainbanner from "../../../../public/images/mt5where.webp";
import Image from "next/image";
import Title from "../Uiux/Title";
import Link from "next/link";
const Mt5anywhere = () => {
    const getMobileLink = () => {
    if (typeof navigator === "undefined") return "#"; // fallback for SSR
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "https://download.mql5.com/cdn/mobile/mt5/ios?server=FlipTradeGroup-Server";
    } else if (/android/i.test(userAgent)) {
      return "https://download.mql5.com/cdn/mobile/mt5/android?server=FlipTradeGroup-Server";
    } else {
      return "https://download.mql5.com/cdn/web/flip.trade.group/mt5/fliptradegroup5setup.exe";
    }
  };
  return (
    <div className="bg-white">
      <div
        className="bg-cover"
        style={{ backgroundImage: `url(${boxbg.src})` }}
      >
        <div className="inn_container py-12 lg:py-18">
          <div className="text-center pb-4 md:pb-8">
            <Title title={"Trade Anywhere"} color={"text-secondary"} />
          </div>
          <div className="relative">
            <Image
              src={mainbanner}
              alt="main banner"
              width={2000}
              height={500}
              className="max-w-[990px] w-full m-auto"
            />
            <Link
              href={
                "https://download.mql5.com/cdn/web/flip.trade.group/mt5/fliptradegroup5setup.exe"
              }
              target="_blank"
            >
              <div className=" md:absolute mt-3 bottom-[15%] left-[10%] list_text font-light font_ternary leading-6 xl:leading-[28px] bg-subprimary md:w-max py-2.5 lg:py-5 px-8 lg:px-8 rounded-3xl md:rounded-[60px] text-white">
                <span className="font-semibold">Web </span> – Trade from any
                browser.
              </div>
            </Link>
            {/* mobile ios & android  */}
            <Link href={getMobileLink()} target="_blank">
              <div className=" md:absolute mt-3 right-[10%] list_text font-light font_ternary leading-6 xl:leading-[28px] bg-subprimary md:w-max py-2.5 lg:py-5 px-8 lg:px-8 rounded-3xl md:rounded-[60px] text-white">
                <span className="font-semibold">Mobile </span> – iOS & Android
                apps for trading on-the-go.
              </div>
            </Link>
            <Link
              href={
                "https://download.mql5.com/cdn/web/flip.trade.group/mt5/fliptradegroup5setup.exe"
              }
              target="_blank"
            >
              <div className=" md:absolute mt-3 top-[15%] right-[5%] list_text font-light font_ternary leading-6 xl:leading-[28px] bg-subprimary md:w-max py-2.5 lg:py-5 px-8 lg:px-8 rounded-3xl md:rounded-[60px] text-white">
                <span className="font-semibold">Desktop </span> – Windows &
                macOS.
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mt5anywhere;
