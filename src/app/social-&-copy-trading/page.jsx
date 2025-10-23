import React from "react";
import Copytradingbanner from "../Components/Pagecomponents/Copytradingbanner";
import Whatcopytrading from "../Components/Pagecomponents/Whatcopytrading";
import Copytradingwork from "../Components/Pagecomponents/Copytradingwork";

import copytradingdesktop from "../../../public/images/copytradingdesktop.webp";
import ibgrapsecondaryph from "../../../public/images/ibgrapsecondaryph.webp";
import Grapsecondary from "../Components/Pagecomponents/Grapsecondary";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
const faqData = [
  {
    question: "What account types are available?",
    answer:
      "FlipTrade offers Standard, ECN, and VIP accounts with different features for traders of all levels."
  },
  {
    question: "What is the minimum deposit?",
    answer:
      "Minimum deposits vary by account type, making it easy for beginners and professionals to start trading."
  },
  {
    question: "Do spreads differ by account type?",
    answer:
      "Yes, ECN and VIP accounts offer tighter spreads compared to Standard accounts."
  },
  {
    question: "Can I change my account type later?",
    answer:
      "Yes, you can upgrade or switch accounts by contacting FlipTrade support."
  },
  {
    question: "What benefits do VIP accounts offer?",
    answer:
      "VIP accounts provide premium spreads, lower fees, and priority support."
  }
];
export const metadata = {
  title: "Social & Copy Trading – FlipTrade Group | Follow Top Traders",
  description:
    "Join FlipTrade Group’s social & copy trading platform today! Mirror expert traders automatically, optimize your trades and grow smarter with every move."
};
const page = () => {
  return (
    <div>
      <Copytradingbanner />
      <Whatcopytrading />
      <Copytradingwork />
      <Grapsecondary
        desktopbanner={copytradingdesktop}
        phonetabbanner={ibgrapsecondaryph}
        title={"Start Copy <br/> Trading Today"}
        description={`Experience smarter trading — join the <br/> Fliptrade community and copy success with <br/> confidence.`}
        btnname={"Start Social & Copy Trading Now"}
      />

      <div className="bg-white py-12 md:py-18 lg:py-24">
        <div className="inn_container">
          <div className="text-center">
            <Title
              title={"Frequently Asked <br/> Questions"}
              color="text-secondary"
            />
          </div>
          <div>
            <Faq faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
