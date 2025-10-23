import React from "react";
import Ibpartnerbanner from "../Components/Pagecomponents/Ibpartnerbanner";
import Ibpartnerwork from "../Components/Pagecomponents/Ibpartnerwork";
import Ibwhy from "../Components/Pagecomponents/Ibwhy";
import Grapsecondary from "../Components/Pagecomponents/Grapsecondary";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";

import ibgrapsecondary from "../../../public/images/ibgrapsecondary.webp";
import ibgrapsecondaryph from "../../../public/images/ibgrapsecondaryph.webp";
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
  title: "IB Partner Program – FlipTrade Group | Earn with Trade Referrals",
  description:
    "Join FlipTrade Group’s IB Partner Program now! Drive clients, earn commissions, and access exclusive tools your path to success in forex & CFD referrals."
};
const page = () => {
  return (
    <div>
      <Ibpartnerbanner />
      <Ibpartnerwork />
      <Ibwhy />
      <Grapsecondary
        desktopbanner={ibgrapsecondary}
        phonetabbanner={ibgrapsecondaryph}
        title={"Start Earning <br/> Today"}
        description={`Become a Fliptrade IB Partner and unlock a <br/> world of opportunities — refer traders, earn  <br/> competitive commissions, and grow    your  <br/> income effortlessly.`}
        btnname={'Join the Fliptrade Partner Club'}
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
