import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Graphhome from "./Markets/Graphhome";

function Economicalander() {
  return (
    <div className="bg-white">
      <div className="inn_container  pt-12 md:pt-18 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] text-center lg:text-start">
          <div className="max-w-[350px] m-auto md:max-w-[unset] pb-3 md:pb-0">
            <Title
              title="FlipTrade <br/> Economic Calendar"
              color="text-secondary"
            />
          </div>
          <div className="flex justify-center items-center">
            <Discription
              dispription="Stay ahead of market-moving events with <br/> FlipTrade’s Economic Calendar. Get real-time <br/> updates on global economic releases, central <br/> bank policies, and other key events that influence <br/> currencies, commodities, indices, and stocks."
              color="text-secondary"
            />
          </div>
        </div>
        <div>
          <Graphhome pagepath='/economic-calendar' /> 
        </div>
      </div>
    </div>
  );
}

export default Economicalander;
