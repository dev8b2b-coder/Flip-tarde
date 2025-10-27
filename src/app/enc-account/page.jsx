import React from "react";
import Accountsbanner from "../Components/Pagecomponents/Accouttypes/Accountsbanner";
import Accountgetstarted from "../Components/Pagecomponents/Accouttypes/Accountgetstarted";
import Accountchoose from "../Components/Pagecomponents/Accouttypes/Accountchoose";
import Accountcards from "../Components/Pagecomponents/Accouttypes/Accountcards";
import Accountgetstart from "../Components/Pagecomponents/Accouttypes/Accountgetstart";
import encaccgrap from "../../../public/images/encaccgrap.webp";
import encaccgrapph from "../../../public/images/encaccgrapph.webp";
import Accountgrap from "../Components/Pagecomponents/Accouttypes/Accountgrap";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import encbannerright from "/public/images/encbannerright.webp";
import acountcard1 from "/public/icons/acountcard1.svg";
import acountcard2 from "/public/icons/acountcard2.svg";
import acountcard3 from "/public/icons/acountcard3.svg";
const faqData = [
  {
    question: "What is the minimum deposit for the Standard Account?",
    answer:
      "The minimum deposit is $25, making it easy for beginners to start trading with FlipTrade."
  },
  {
    question: "Does the Standard Account charge any commission?",
    answer:
      "Social Trading allows traders to share, follow, and learn from each other’s strategies in real time."
  },
  {
    question: "Is the Standard Account swap-free?",
    answer:
      "Simply create an account, choose an expert trader to copy, and set your investment amount."
  },
  {
    question: "Who is the Standard Account best suited for?",
    answer:
      "Yes, you can manage your risk by setting limits, adjusting trade size, or stopping copying anytime."
  },
  {
    question: "How do I open a Standard Account?",
    answer:
      "Yes, experienced traders can apply to become strategy providers and earn from their followers’ trades."
  }
];

const features = [
  {
    icon: acountcard1,
    title: "High-Capital Traders",
    description: "Trade frequently with <br/> well-defined strategies.",
    class: "z-[4]"
  },
  {
    icon: acountcard2,
    title: "Seasoned Traders",
    description: "Take advantage of tight <br/> spreads on larger trades.",
    class: "xl:w-[120%] left-[-20%] z-[3]"
  },
  {
    icon: acountcard3,
    title: "Automated Traders",
    description: "Optimized for algorithmic <br/> and professional trading.",
    class: "xl:w-[120%] left-[-20%] z-[2]"
  }
];

const cardphdata = [
  "Register or log in to FlipTrade.",
  "Complete KYC verification.",
  "Deposit a minimum of $200.",
  "Select ECN Account.",
  "Review commission and trading costs."
];
const page = () => {
  return (
    <div>
      <Accountsbanner
        title={"ECN Account – Trade Like a Pro"}
        description={
          "Take your trading to the next level with the ECN Account — designed for serious traders seeking ultra-tight spreads, lightning-fast  execution, and direct market access."
        }
        bannerposter={encbannerright}
      />
      <Accountgetstarted
        description={
          "Advanced features for growing traders—competitive, <br/> reliable, and built for consistent performance."
        }
        mini_depo={"$200"}
        spreads_from={"Raw Spreads"}
        swap_free={"Yes"}
        commission={"No"}
      />
      <Accountchoose
        title={"Why Choose the <br/> EDN Account?"}
        description={
          "Trade with ultra-tight spreads, lightning-fast execution, <br/> and direct market access—perfect for professional <br/> and high-volume traders."
        }
        cardtitle1={"Ultra-Tight Spreads"}
        card_desc1={
          "Ideal for high-volume or frequent traders <br/> seeking lower trading costs."
        }
        cardtitle2={"Transparent Pricing"}
        card_desc2={
          "Raw spreads provide full market transparency, more <br/> competitive than standard spreads."
        }
        cardtitle3={"Advanced Strategy Ready"}
        card_desc3={
          "Perfect for scalping or frequent trading where <br/> cost-efficiency is crucial."
        }
      />
      <Accountcards
        description={
          "Designed for professional traders, scalpers, and <br/> high-volume traders seeking the fastest execution <br/> and tightest spreads."
        }
        carddata={features}
      />
      <Accountgetstart
        description={
          "Sign up, complete verification, deposit $200 or more, <br/> and start trading with ECN conditions."
        }
        card1desk={"Register or log in to <br/> FlipTrade."}
        card2desk={"Complete KYC <br/> verification."}
        card3desk={"Deposit a <br/> minimum of $200."}
        card4desk={"Select ECN <br/> Account."}
        card5desk={"Review commission <br/> and trading costs."}
        cardphdata={cardphdata}
      />
      <Accountgrap
        desktopbanner={encaccgrap}
        phonetabbanner={encaccgrapph}
        title={"ECN Trading <br/> Made Precise"}
        description={
          "Open an ECN Account with just $200 <br/> and trade like a professional."
        }
        btnname={"Open Account Now"}
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
