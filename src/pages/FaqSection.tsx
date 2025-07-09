import React, { useState } from "react";
import backgroundImg from "../assets/images/font1.png";
import background2 from "../assets/images/background2.png";
import background1 from "../assets/images/background1.png";

function FaqSection() {
  const questions = [
    {
      q: "How does it work?",
      a: "Our platform connects to your charting tools like TradingView and offers signal overlays, backtesting, and screeners in real-time.",
    },
    {
      q: "Which plan should I choose?",
      a: "Choose 'Ultimate' for full access to backtesting, AI tools, and premium support. 'Premium' is best for most traders.",
    },
    {
      q: "What markets are supported?",
      a: "We support all markets on TradingView: stocks, forex, crypto, futures, and more.",
    },
    {
      q: "Does it work on MetaTrader 4/5?",
      a: "Currently, our tools are only available for TradingView. MT4/5 support is not available.",
    },
    {
      q: "Can I win every trade using this?",
      a: "No system guarantees 100% success. Our tools provide data and signals to improve your decision-making.",
    },
    {
      q: "How do discounts work?",
      a: "We offer up to 40% off on yearly plans. Occasionally, limited-time discounts may be available.",
    },
    {
      q: "Is this friendly for beginners?",
      a: "Yes! We provide tutorials and support to help you get started, even with no trading experience.",
    },
    {
      q: "Can I change my plan anytime?",
      a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div
      className="bg-[#010b24] text-white font-sans h-full bg-cover bg-center justify-center px-6"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* FAQ Section */}
      <section className="flex flex-col md:flex-row w-[90%] max-w-6xl mx-auto items-start gap-12 pt-6 px-4">
        {/* Title */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold">Frequent questions</h2>
        </div>

        {/* Questions */}
        <div className="w-full md:w-1/2">
          {questions.map((item, i) => (
            <div
              key={i}
              className="border-b border-white/10 py-4 text-base md:text-lg font-medium cursor-pointer"
              onClick={() => toggleAccordion(i)}
            >
              <div className="flex justify-between items-center hover:text-white/90 transition-colors">
                <span>{item.q}</span>
                <span className="text-xl text-white/50">
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>
              {openIndex === i && (
                <p className="mt-2 text-sm text-white/70">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Cards Section */}
      <section className="relative px-6 md:px-12 mt-24 mb-16 ">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-600/20 blur-3xl opacity-40 " />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb ">
          {/* Card 1 */}
          <div className="bg-[#010b24] p-6 rounded-2xl  border border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.01] transition w-140 -m-0">
            <div className="mb-6">
              <div className="ml-auto  right-0 top-0 bottom- absolute  w-35 h-31 rounded-lg flex items-center justify-center text-2xl">
                <img
                  src={background1}
                  alt="Description"
                  className="w-40 h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 mt-40">
              Explore all features
            </h3>
            <p className=" text-white text-[20] mb-6">
              Learn how LuxAlgo works and all about how you can upgrade your
              charts to the next level.
            </p>
            <button className="text-sm border border-white/30 px-3 py-1 rounded-full bg-white text-black transition">
              Explore Features →
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#010b24] p-6 rounded-2xl   relative border posit border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.01] transition w-140 m-0 ">
            <div className="mb-6">
              <div className="ml-auto  right-0 top-0 absolute   rounded-lg flex items-center justify-center text-2xl">
                <img
                  src={background2}
                  alt="Description"
                  className="w-40 h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 mt-40">Choose a plan</h3>
            <p className=" text-white/ mb-6 text-[20]">
              Get a plan that suits your style of trading and level up <br />{" "}
              your analysis.
            </p>
            <button className="text-sm border border-white/30 px-3 py-1 rounded-full bg-white text-black transition">
              Choose Plan →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaqSection;
