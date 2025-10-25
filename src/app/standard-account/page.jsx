import React from "react";
import Accountsbanner from "../Components/Pagecomponents/Accouttypes/Accountsbanner";
import Accountgetstarted from "../Components/Pagecomponents/Accouttypes/Accountgetstarted";
import Accountchoose from "../Components/Pagecomponents/Accouttypes/Accountchoose";
import Accountcards from "../Components/Pagecomponents/Accouttypes/Accountcards";
import Accountgetstart from "../Components/Pagecomponents/Accouttypes/Accountgetstart";
import standardaccgrap from "../../../public/images/standardaccgrap.webp";
import standardaccgrapph from "../../../public/images/standardaccgrapph.webp";
import Accountgrap from "../Components/Pagecomponents/Accouttypes/Accountgrap";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
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
const page = () => {
  return (
    <div>
      <Accountsbanner />
      <Accountgetstarted />
      <Accountchoose />
      <Accountcards />
      <Accountgetstart />
      <Accountgrap
        desktopbanner={standardaccgrap}
        phonetabbanner={standardaccgrapph}
        title={"Trade Easy <br/> with Standard"}
        description={`Open a Standard Account with just $25 and take <br/> your first step into the markets.`}
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
