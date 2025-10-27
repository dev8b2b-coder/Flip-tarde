"use client";
import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Image from "next/image";

import buildtraderimagelowerph from "../../../../public/images/buildtraderimagelowerph.webp";
import Button from "../Uiux/Button";
import Link from "next/link";

const Grapsecondary = ({desktopbanner,phonetabbanner,title,description , btnname}) => {
  return (
    <div className="bg-white">
      <div className="inn_container hidden lg:block pb-12">
        <div className="relative">
          <Image src={desktopbanner} alt="banner" width={3000} height={500} />

          <div className="absolute top-0 h-full flex items-center w-[50%]">
            <div className="relative top-[13%] left-[6%] xl:left-[10%]">
              <Title
                title={title}
                color="gradient_text"
              />
              <div className="xl:pt-4">
                <Discription
                  dispription={description}
                  color="text-white"
                />
              </div>

              <div className="pt-4 xl:pt-8 flex gap-2 xl:gap-5">
                <Link
                  href={"https://client.fliptradegroup.com/trader/registration"}
                >
                  <Button
                    btn_name={btnname}
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

      <div className="block lg:hidden inn_container pt-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-3">
          <div>
            <Image
              src={phonetabbanner}
              alt="ibgrapsecondaryph"
              width={1000}
              height={500}
              className=""
            />
          </div>
          <div
            className=" relative bg-cover h-[400px]   bg-no-repeat rounded-[20px]"
            style={{ backgroundImage: `url(${buildtraderimagelowerph.src})` }}
          >
            <div className="md:w-[90%] m-auto flex items-center justify-center h-full">
              <div className="relative top-[7%] p-4  text-center px-8 md:px-0">
                <Title
                  title={title}
                  color="gradient_text"
                />
                <div className="xl:pt-4">
                  <Discription
                    dispription={description}
                    color="text-white"
                  />
                </div>
                <div className="pt-4 xl:pt-2 hidden md:flex  justify-center gap-2 xl:gap-5">
                  <Link
                    href={
                      "https://client.fliptradegroup.com/trader/registration"
                    }
                  >
                    <Button
                      btn_name={btnname}
                      btn_bg="gradient_bg"
                      text_color="text-secondary"
                      border_color="border-transparent"
                    />
                  </Link>
                </div>
                <div className="pt-4 xl:pt-2 grid md:hidden grid-cols-1 gap-2 xl:gap-5">
                  <div className="gap-2 flex justify-center">
                    <Link
                      href={
                        "https://client.fliptradegroup.com/trader/registration"
                      }
                    >
                      <Button
                        btn_name={btnname}
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
};

export default Grapsecondary;
