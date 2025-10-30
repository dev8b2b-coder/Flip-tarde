import React from "react";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import giftbtnicon from "../../../../public/icons/giftbtnicon.svg";
import Ethereum from "../../../../public/icons/Ethereum.svg";
import Zcash from "../../../../public/icons/Zcash.svg";
import Bitcoin from "../../../../public/icons/Bitcoin.svg";
import Title from "../Uiux/Title";
import Button from "../Uiux/Button";
import Image from "next/image";
import Link from "next/link";
import Worldbrokerbg from "../../../../public/images/Worldbrokerbg.webp";
import Worldbrokerright from "../../../../public/images/Worldbrokerright.webp";
import fireiconblue from "../../../../public/icons/firebtniconblue.svg";
import giftwhite from "../../../../public/icons/giftwhite.svg";
function Worldbroker() {
  return (
    <div className="bg-theme pt-12 md:pt-18 lg:pt-24 pb-12 md:pb-18">
      <div
        className="inn_container   bg-no-repeat bg-center bg-contain relative"
        style={{ backgroundImage: `url(${Worldbrokerbg.src})` }}
      >
        <div className="grid grid-cols-[3fr_2fr] py-22  px-12">
          <div>
            <Title
              title={
                "Get Onboard with the <br/> World’s Rapidly <br/> Growing Broker"
              }
              color={"text-white"}
            />

            <div>
              <Button
                btn_name={`Open Live Account`}
                btn_bg="bg-white"
                text_color="text-primary"
                border_color="border-transparent"
                icon={fireiconblue}
              />
              <Button
                btn_name={`Become a Partner`}
                btn_bg="bg-[#00000099]"
                text_color="text-white"
                border_color="border-transparent"
                icon={giftwhite}
              />
            </div>
          </div>

          <div className="" />
          <div className="absolute right-12 bottom-0">
            <Image
              src={Worldbrokerright}
              alt="Worldbrokerright"
              width={1000}
              height={500}
              className="max-w-[590px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worldbroker;
