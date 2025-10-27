"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../../public/images/Logo.webp";
import Logo2 from "../../../../public/images/Logo2.webp";
import Logoblack from "../../../../public/images/Logoblack.webp";
import Button from "./Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import menuicon from "../../../../public/icons/menuicon.svg";
import menucross from "../../../../public/icons/menucross.svg";
import downarrow from "../../../../public/icons/downarrow.svg";
import usericon from "../../../../public/icons/user.svg";
import giftbtnicon from "../../../../public/icons/giftbtnicon.svg";
import giftwhite from "../../../../public/icons/giftwhite.svg";
const navlistdata = [
  {
    id: 1,
    nav_name: "Quick Start",
    sections: [
      {
        heading: "Introduction",
        items: [
          { id: "whyflip", name: "Why FlipTrade?", link: "/why-fliptrade" },
          { id: "whattrade", name: "What Can You Trade?", link: "#" },
          { id: "onlinetrading", name: "What is Online Trading", link: "#" },
          { id: "howtostart", name: "How to Start Trading", link: "#" },
          { id: "whychooseus", name: "Why Traders Choose Us", link: "#" },
          { id: "faqs", name: "FAQs", link: "/faq" },
        ],
      },
      {
        heading: "Trade",
        items: [
          { id: "typesmarkets", name: "Types of Markets", link: "#" },
          { id: "tradingconditions", name: "Trading Conditions", link: "#" },
          { id: "accounttypes", name: "Account Types Overview", link: "#" },
          { id: "riskmanagement", name: "Risk Management Tips", link: "#" },
        ],
      },
      {
        heading: "Trading Platforms",
        items: [
          { id: "webtrader", name: "WebTrader", link: "/web-trading" },
          { id: "mobileapp", name: "Mobile App", link: "#" },
          { id: "mt5", name: "MetaTrader 5 (MT5)", link: "/platform" },
          {
            id: "platformfeatures",
            name: "Platform Features",
            link: "/platform",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    nav_name: "Markets",
    sections: [
      {
        heading: "Markets",
        items: [
          { id: "onlinetrading", name: "Forex", link: "/forex" },
          { id: "howtostart", name: "Indices", link: "/indices" },
          { id: "whychooseus", name: "Commodities", link: "/commodities" },
          {
            id: "whychooseus",
            name: "Crypto Currency",
            link: "/cryptocurrency",
          },
          { id: "whychooseus", name: "Metals", link: "/metals" },
          { id: "whychooseus", name: "Stocks", link: "/stocks" },
        ],
      },
      {
        heading: "Trade",
        items: [
          { id: "typesmarkets", name: "Types of Markets", link: "#" },
          { id: "tradingconditions", name: "Trading Conditions", link: "#" },
          { id: "accounttypes", name: "Account Types Overview", link: "#" },
          { id: "riskmanagement", name: "Risk Management Tips", link: "#" },
        ],
      },
      {
        heading: "Trading Platforms",
        items: [
          { id: "webtrader", name: "WebTrader", link: "/web-trading" },
          { id: "mobileapp", name: "Mobile App", link: "#" },
          { id: "mt5", name: "MetaTrader 5 (MT5)", link: "/platform" },
          {
            id: "platformfeatures",
            name: "Platform Features",
            link: "/platform",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    nav_name: "Account Type",
    sections: [
      {
        heading: "Account Type",
        items: [
          {
            id: "onlinetrading",
            name: "Standard Account",
            link: "/standard-account",
          },
          {
            id: "howtostart",
            name: "Classic Account",
            link: "/classic-account",
          },
          { id: "whychooseus", name: "ECN Account", link: "/enc-account" },
          {
            id: "whychooseus",
            name: "Professional Account",
            link: "/professional-account",
          },
        ],
      },
      {
        heading: "Trade",
        items: [
          { id: "typesmarkets", name: "Types of Markets", link: "#" },
          { id: "tradingconditions", name: "Trading Conditions", link: "#" },
          { id: "accounttypes", name: "Account Types Overview", link: "#" },
          { id: "riskmanagement", name: "Risk Management Tips", link: "#" },
        ],
      },
      {
        heading: "Trading Platforms",
        items: [
          { id: "webtrader", name: "WebTrader", link: "/web-trading" },
          { id: "mobileapp", name: "Mobile App", link: "#" },
          { id: "mt5", name: "MetaTrader 5 (MT5)", link: "/platform" },
          {
            id: "platformfeatures",
            name: "Platform Features",
            link: "/platform",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    nav_name: "Platforms",
    sections: [
      {
        heading: "Platforms",
        items: [{ id: "whyflip", name: "Mt-5", link: "/platform" }],
      },
      {
        heading: "Trade",
        items: [
          { id: "typesmarkets", name: "Types of Markets", link: "#" },
          { id: "tradingconditions", name: "Trading Conditions", link: "#" },
          { id: "accounttypes", name: "Account Types Overview", link: "#" },
          { id: "riskmanagement", name: "Risk Management Tips", link: "#" },
        ],
      },
      {
        heading: "Trading Platforms",
        items: [
          { id: "webtrader", name: "WebTrader", link: "/web-trading" },
          { id: "mobileapp", name: "Mobile App", link: "#" },
          { id: "mt5", name: "MetaTrader 5 (MT5)", link: "/platform" },
          {
            id: "platformfeatures",
            name: "Platform Features",
            link: "/platform",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    nav_name: "Tools",
    sections: [
      {
        heading: "Tools",
        items: [
          { id: "whyflip", name: "Pip Calculator", link: "/pip-calculator" },
          {
            id: "whattrade",
            name: "Economic Calendar",
            link: "/economic-calendar",
          },
          { id: "howtostart", name: "Web Trading", link: "/web-trading" },
        ],
      },
      {
        heading: "Trade",
        items: [
          { id: "typesmarkets", name: "Types of Markets", link: "#" },
          { id: "tradingconditions", name: "Trading Conditions", link: "#" },
          { id: "accounttypes", name: "Account Types Overview", link: "#" },
          { id: "riskmanagement", name: "Risk Management Tips", link: "#" },
        ],
      },
      {
        heading: "Trading Platforms",
        items: [
          { id: "webtrader", name: "WebTrader", link: "/web-trading" },
          { id: "mobileapp", name: "Mobile App", link: "#" },
          { id: "mt5", name: "MetaTrader 5 (MT5)", link: "/platform" },
          {
            id: "platformfeatures",
            name: "Platform Features",
            link: "/platform",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    nav_name: "Contact",
    sections: [
      {
        heading: "Contact",
        items: [{ id: "whyflip", name: "Contact us", link: "/contact-us" }],
      },
      {
        heading: "Trade",
        items: [
          { id: "typesmarkets", name: "Types of Markets", link: "#" },
          { id: "tradingconditions", name: "Trading Conditions", link: "#" },
          { id: "accounttypes", name: "Account Types Overview", link: "#" },
          { id: "riskmanagement", name: "Risk Management Tips", link: "#" },
        ],
      },
      {
        heading: "Trading Platforms",
        items: [
          { id: "webtrader", name: "WebTrader", link: "/web-trading" },
          { id: "mobileapp", name: "Mobile App", link: "#" },
          { id: "mt5", name: "MetaTrader 5 (MT5)", link: "/platform" },
          {
            id: "platformfeatures",
            name: "Platform Features",
            link: "/platform",
          },
        ],
      },
    ],
  },
];

// Mobile Dropdown Item Component
const MobileDropdownItem = ({ data, isOpen, setIsOpen, setIsMenu }) => {
  const sections = data.sections;

  return (
    <div>
      <p
        className="relative z-10 flex items-center gap-2 text-secondary text-base font-medium py-2 px-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {data.nav_name}
        <Image
          src={downarrow}
          alt="dropdown"
          width={18}
          height={18}
          className={`max-w-[18px] duration-500 transition-all ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </p>
      <div
        className={`${
          isOpen ? "scale-[1] h-auto" : "scale-[0] h-0"
        } w-[250px] duration-500 transition-all ease-in-out rounded-2xl bg-primary`}
      >
        {sections?.map((section) => (
          <div key={section.heading} className="p-2">
            <h4 className="text-white font-bold text-sm mb-2">
              {section.heading}
            </h4>
            {section.items.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="relative z-10 text-white font_secondary py-1 px-3 block rounded-lg text-sm font-medium ml-2"
                onClick={() => setIsMenu(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Header() {
  const pathname = usePathname();
  const [hoverPos, setHoverPos] = useState({ left: 0, width: 0 });
  const [activePos, setActivePos] = useState({ left: 0, width: 0 });
  const [isMenu, setIsMenu] = useState(false);
  const [isMarket, setIsMarket] = useState(false);
  const [isTools, setIsTools] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(1); // Default to Quick Start (id: 1)
  const containerRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!containerRef.current) return;

      const marketsDropdown =
        navlistdata.find((n) => n.nav_name === "Markets")?.dropdown || [];
      const marketsLinks = new Set(marketsDropdown.map((d) => d.link));
      const isMarketsPath = marketsLinks.has(pathname);
      const selector = isMarketsPath
        ? '[data-link="/forex"]'
        : `[data-link="${pathname}"]`;

      const target = containerRef.current.querySelector(selector);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const parentRect = containerRef.current.getBoundingClientRect();
      setActivePos({ left: rect.left - parentRect.left, width: rect.width });
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  const showPos = hoverPos.width > 0 ? hoverPos : activePos;

  const moveHighlightTo = (el) => {
    if (!el || !containerRef.current) return;
    const rect = el.getBoundingClientRect();
    const parentRect = containerRef.current.getBoundingClientRect();
    setHoverPos({ left: rect.left - parentRect.left, width: rect.width });
  };

  return (
    <div className={`pt-8 pb-6 w-full border-b border-white/20`}>
      <div className="inn_container flex justify-between z-30 sticky">
        {/* Logo */}
        <div className="flex items-center relative z-[999]">
          <Link href="/">
            <Image
              src={openDropdown ? Logo2 : Logo}
              alt="Logo"
              width={2000}
              height={500}
              className="max-w-44 2xl:max-w-56"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden w-[56%] 2xl:w-[55%] xl:max-h-[52px] 2xl:max-h-[unset] max-w-[1280px] xl:flex justify-center">
          <div
            ref={containerRef}
            className="relative flex w-[98%] 2xl:w-[95%] justify-around items-center 2xl:py-1 font_secondary"
          >
            <div
              className={`${
                isMenu ? "fixed" : "absolute"
              } bottom-[-2px] h-[2px] bg-primary transition-all duration-300 ease-in-out`}
              style={{ left: showPos.left, width: showPos.width }}
            />
            {navlistdata.map((data) => (
              <div
                key={data.id}
                className="relative group"
                onMouseEnter={(e) => {
                  // Clear any pending timeout
                  if (leaveTimeoutRef.current) {
                    clearTimeout(leaveTimeoutRef.current);
                    leaveTimeoutRef.current = null;
                  }
                  const anchor = e.currentTarget.querySelector("[data-link]");
                  moveHighlightTo(anchor);
                  setOpenDropdown(data.sections ? data.nav_name : null);
                  setHoveredItem(data.id);
                }}
                onMouseLeave={() => {
                  leaveTimeoutRef.current = setTimeout(() => {
                    setHoverPos({ left: 0, width: 0 });
                    setOpenDropdown(null);
                    setHoveredItem(1); // Reset to Quick Start
                  }, 100);
                }}
              >
                <p
                  data-link="#"
                  className={`relative z-10 list_text font-medium py-2 px-3 block cursor-pointer transition-colors duration-300 ${
                    hoveredItem === data.id
                      ? "text-primary"
                      : openDropdown === null
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {data.nav_name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="flex gap-8 items-center">
          <div className="hidden lg:flex items-center gap-6">
            <Link href={"https://client.fliptradegroup.com/trader"}>
              <button
                className={`hover:text-[var(--subprimary)] list_text font-medium px-8 cursor-pointer hover:underline hover:scale-[1.1] duration-300 transition-all ${
                  openDropdown ? "text-black" : "text-white"
                }`}
              >
                Login
              </button>
            </Link>
            <div className="rounded-[50px]">
              <Link
                href={"https://client.fliptradegroup.com/trader/registration"}
              >
                <Button
                  icon={usericon.src}
                  btn_name="Sign Up"
                  btn_bg="bg-primary"
                  text_color="text-white"
                  border_color="border-primary"
                  shadow={true}
                />
              </Link>
            </div>
          </div>
          <div className="flex xl:hidden gap-6">
            <div
              className={`relative z-[999] duration-700 transition-all ${
                isMenu ? "rotate-0" : "rotate-[225deg]"
              }`}
              onClick={() => setIsMenu(!isMenu)}
            >
              <Image
                src={!isMenu ? menuicon : menucross}
                alt="menu"
                width={1000}
                height={500}
                className="max-w-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed bg-white h-[120vh] w-[100vw] z-[5] duration-700 transition-all ${
          !isMenu
            ? "right-[-300%] scale-0 top-[-300%]"
            : "right-0 top-0 scale-[1]"
        }`}
      >
        <div className="relative flex flex-col w-[80%] m-auto justify-around items-start pt-[110px] py-1 font_secondary">
          {navlistdata.map((data) => (
            <div key={data.id} className="relative group">
              {data.sections ? (
                data.nav_name === "Markets" ? (
                  <MobileDropdownItem
                    data={data}
                    isOpen={isMarket}
                    setIsOpen={setIsMarket}
                    setIsMenu={setIsMenu}
                  />
                ) : (
                  <MobileDropdownItem
                    data={data}
                    isOpen={isTools}
                    setIsOpen={setIsTools}
                    setIsMenu={setIsMenu}
                  />
                )
              ) : (
                <Link
                  onClick={() => setIsMenu(false)}
                  data-link="#"
                  href="#"
                  className="relative z-10 text-secondary text-base font-medium py-2 px-3 block"
                >
                  {data.nav_name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="lg:hidden flex items-center w-[80%] pt-5 m-auto gap-8">
          <Link href={"https://client.fliptradegroup.com/trader/registration"}>
            <Button
              icon={usericon}
              btn_name="Sign Up"
              btn_bg="bg-primary"
              text_color="text-white"
              border_color="border-primary"
              shadow={true}
            />
          </Link>
          <Link href={"https://client.fliptradegroup.com/trader"}>
            <button className="text-secondary hover:text-[var(--subprimary)] list_text font-medium px-8 cursor-pointer hover:underline hover:scale-[1.1] duration-300 transition-all">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Hover Dropdown Section */}
      <div
        onMouseEnter={() => {
          if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
            leaveTimeoutRef.current = null;
          }
        }}
        onMouseLeave={() => {
          setOpenDropdown(null);
          setHoverPos({ left: 0, width: 0 });
        }}
        className={`absolute left-0 top-0 z-20 origin-top transition-all duration-300 ease-in-out w-full ${
          openDropdown
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full">
          <div className="m-auto bg-[#F2F7FF] border border-[#75757526] shadow-lg overflow-hidden h-[471px]">
            <div className="relative grid grid-cols-[2fr_3fr] gap-4 py-16 ps-32 top-[90px] h-[400px]">
              <div className="flex flex-col items-start">
                <div className="text-secondary text-5xl leading-16">
                  Where Smart Traders
                  <br /> Flip the Game.
                </div>
                <div className="flex pt-8 gap-2.5">
                  <Link
                    href={
                      "https://client.fliptradegroup.com/trader/registration"
                    }
                  >
                    <Button
                      icon={firebtnicon.src}
                      btn_name="Open Live Account"
                      btn_bg="bg-primary"
                      text_color="text-white"
                      border_color="border-primary"
                      shadow={true}
                    />
                  </Link>
                  <Link
                    href={
                      "https://client.fliptradegroup.com/trader/registration"
                    }
                  >
                    <Button
                      icon={giftwhite.src}
                      btn_name="Try Demo"
                      btn_bg="bg-[#0000008A]"
                      text_color="text-white"
                      border_color="border-[#fff]"
                    />
                  </Link>
                </div>
              </div>

              <div className="max-w-[80%]">
                <div className="grid grid-cols-3 gap-4 py-4 px-6 h-max">
                  {navlistdata
                    .find((n) => n.nav_name === openDropdown)
                    ?.sections?.map((section) => (
                      <div key={section.heading} className="text-start">
                        <h3 className="text-xl font-bold text-black mb-4">
                          {section.heading}
                        </h3>
                        <div className="space-y-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.id}
                              href={item.link}
                              className="relative z-10 text-black hover:text-primary font_secondary hover:underline py-1 block rounded-lg text-base font-medium transition-all duration-500"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
