import React from "react";
import Accountsbanner from "../Components/Pagecomponents/Accouttypes/Accountsbanner";
import Accountgetstarted from "../Components/Pagecomponents/Accouttypes/Accountgetstarted";
import Accountchoose from "../Components/Pagecomponents/Accouttypes/Accountchoose";
import Accountcards from "../Components/Pagecomponents/Accouttypes/Accountcards";
import Accountgetstart from "../Components/Pagecomponents/Accouttypes/Accountgetstart";
import proaccgrap from "../../../public/images/proaccgrap.webp";
import proaccgrapph from "../../../public/images/proaccgrapph.webp";
import Accountgrap from "../Components/Pagecomponents/Accouttypes/Accountgrap";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import probannerright from "/public/images/probannerright.webp";
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
    title: "Full-Time Traders",
    description: "Manage significant <br/> capital with precision.",
    class: "z-[4]"
  },
  {
    icon: acountcard2,
    title: "Institutions & Firms",
    description: "Hedge funds, prop trading, and <br/> serious investors.",
    class: "xl:w-[120%] left-[-20%] z-[3]"
  },
  {
    icon: acountcard3,
    title: "Premium Traders",
    description: "Seek top-tier pricing, <br/> service, and flexibility.",
    class: "xl:w-[120%] left-[-20%] z-[2]"
  }
];

const cardphdata = [
  "Register or log in to FlipTrade.",
  "Complete enhanced verification.",
  "Deposit a minimum of $500.",
  "Choose “Professional Account.”",
  "Confirm Benefits with Your Rep"
];
const page = () => {
  return (
    <div>
      <Accountsbanner
        title={"Professional Account – Trade with Expertise"}
        description={
          "Designed for expert traders who want advanced features, tighter spreads, and precise control over their strategies."
        }
        bannerposter={probannerright}
      />
      <Accountgetstarted
        description={
          "Premium features for experienced traders—fast, precise, <br/> and designed for high-performance trading."
        }
        mini_depo={"$500"}
        spreads_from={"Raw Spreads"}
        swap_free={"Yes"}
        commission={"Yes"}
      />
      <Accountchoose
        title={"Why Choose the <br/> Professional Account?"}
        description={
          "Premium features for experienced traders—fast, <br/> precise, and designed for high-performance trading."
        }
        cardtitle1={"Elite Pricing"}
        card_desc1={
          "Get the best spreads and trading conditions <br/> available on FlipTrade."
        }
        cardtitle2={"Professional-Grade Service"}
        card_desc2={
          "Enjoy priority support, faster withdrawals, and potentially <br/> a dedicated account manager."
        }
        cardtitle3={"Advanced Tools & Liquidity"}
        card_desc3={
          "Optimized for high-volume traders and <br/> institutional-level trading."
        }
      />
      <Accountcards
        description={
          "Ideal for experienced traders, high-volume traders, and <br/> professionals seeking premium execution and <br/> advanced trading conditions."
        }
        carddata={features}
      />
      <Accountgetstart
        description={
          "Register, verify, deposit $500 or more, and start <br/> trading with Professional Account conditions."
        }
        card1desk={"Register or log in to <br /> FlipTrade."}
        card2desk={"Complete enhanced <br/> verification."}
        card3desk={"Deposit a <br/> minimum of $500."}
        card4desk={'Choose <br/> “Professional Account.” '}
        card5desk={"Confirm Benefits <br/> with Your Rep"}
        cardphdata={cardphdata}
      />
      <Accountgrap
        desktopbanner={proaccgrap}
        phonetabbanner={proaccgrapph}
        title={"Professional <br/> Trading Made <br/> Premium"}
        description={
          "Open a Professional Account with just $500 <br/> and access elite trading conditions."
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
