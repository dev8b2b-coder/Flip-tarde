import React from "react";
import Whyflipbanner from "../Components/Pagecomponents/Whyflipbanner";
import Marketaccess from "../Components/Pagecomponents/Marketaccess";
import whyflipstep1 from "../../../public/icons/whyflipstep1.svg";
import whyflipstep2 from "../../../public/icons/whyflipstep2.svg";
import whyflipstep3 from "../../../public/icons/whyflipstep3.svg";
import whyflipstep4 from "../../../public/icons/whyflipstep4.svg";
import Whyflipstep from "../Components/Pagecomponents/Whyflipstep";
import Grapbanner from "../Components/Pagecomponents/Grapbanner";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
const pointdata = [
  {
    id: 1,
    title: "Powerful Platform",
    description: "Trade seamlessly on <br/> MetaTrader 5",
    icon: whyflipstep1
  },
  {
    id: 2,
    title: "Cross-Device Access",
    description: "Use desktop, web, or <br/> mobile apps",
    icon: whyflipstep2
  },
  {
    id: 3,
    title: "Smart Tools",
    description: "Advanced indicators and <br/> charting features",
    icon: whyflipstep3
  },
  {
    id: 4,
    title: "Full Control",
    description: "Customize and trade <br/> your way",
    icon: whyflipstep4
  }
];
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
function page() {
  return (
    <div>
      <Whyflipbanner />
      <Marketaccess />
      <Whyflipstep pointdata={pointdata} />
      <Grapbanner />
      <div className="bg-white pb-12 md:pb-18 lg:py-24">
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
}

export default page;
