import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { MoveRight, Undo } from "lucide-react";
import img113 from "../assets/images/img113.png";
import img131 from "../assets/images/img131.png";

const sharedFeatures = [
  "Price Action Concepts toolkit + screener",
  "Signals & Overlays toolkit + screener",
  "Oscillator Matrix toolkit + screener",
  "Advanced tools alerts on TradingView",
  "Alerts & strategies access in Discord",
];

const ultimateExtra = [
  "Full suite w/ 3 Backtesters on TradingView",
  "Deep optimization engine for signal settings",
  "Scanners, bots, & backtests shared weekly",
  "Priority 24/7 support & active product updates",
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="bg-[#010b24] flex-1 text-white py-20 px-4 md:px-12 text-center h-full ">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12 mt-0 ">
        Plans for every style of trading
      </h2>

      {/* Countdown */}
      <div className="flex items-center justify-center gap-2 bg-[#010b24] p-3 rounded-lg ">
        {["09", "19", "19", "12"].map((num, idx) => (
          <React.Fragment key={idx}>
            <div className="bg-[#12192f] text-white text-center px-4 py-3 border-white/10 border-1 rounded-md">
              <div className="text-3xl font-bold font-mono tabular-nums">
                {num}
              </div>
              <div className="text-[8px] text-white mt-0">
                {["Days", "Hours", "Minutes", "Seconds"][idx]}
              </div>
            </div>
            {idx < 3 && (
              <div className="text-2xl text-white/30 font-bold">:</div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Switcher */}
      <div className="flex flex-col justify-center items-center gap-2 text-sm mb-10">
        <span className="bg-[#0f172a] px-3 py-1 text-[12px] mb-2 mt-6 rounded border border-white/10 text-white">
          Pay yearly, get up to an extra 40% off!
        </span>
        <div className="flex items-center mt-2 border-white/20 rounded-full overflow-hidden text-sm relative">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-2 py-1.5 text-[10px] font-medium rounded-l-full transition-all duration-300 ${
              billingCycle === "monthly"
                ? "bg-white text-black"
                : "bg-white/10 text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-1.5 text-[9px] font-medium transition-all duration-300 rounded-r-full flex items-center gap-1 ${
              billingCycle === "yearly"
                ? "bg-white text-black"
                : "bg-white/20 text-white"
            }`}
          >
            Yearly
          </button>
          <Undo className="-scale-y-100 text-cyan-400 ml-1 " size={24} />
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-3">
        {/* Premium Plan */}
        <div className="relative w-[280px] rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] text-left shadow-xl overflow-hidden">
          <div className="ml-auto right-0 top-0 absolute rounded-lg flex items-center justify-center text-2xl">
            <img
              src={img131}
              alt="Description"
              className="w-20 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <div className="p-6">
              <h3 className="text-white text-sm font-semibold mb-1">Premium</h3>
              <div className="top-3 w-16 text-center mb-3 mt-3 left-3 z-20 mb-8 text-white text-[9px] px-3 py-[3px] rounded"></div>
              <p className="text-2xl font-bold mb-2">
                <sub className="text-sm align-sub/2 ">$</sub>
                {billingCycle === "monthly" ? "39.99" : "33.33"}{" "}
                <span className="text-xs font-normal">/mo</span>
              </p>
              <p className="text-[10px] text-white/50 mb-4">
                ${billingCycle === "monthly" ? "479.88" : "399.96"} / yr
              </p>
              <p className="text-[10px] text-center mb-3 mt-2 leading-tight">
                For active traders, the best <br />
                set of indicators & signals.
              </p>
            </div>
            <div className="bg-[#1e293b] rounded-b-2xl p-4 space-y-2 text-[10px] rounded-t-2xl mt-1.5">
              <p>All premium features</p>
              {sharedFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="border border-green-500 rounded-full p-[3px]">
                    <FaCheck className="text-green-500 text-[6px]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
              <div className="flex justify-center">
                <button className="bg-gray-500 mt-0.5 mb-0.5 text-white py-1 px-2 rounded-full flex items-center justify-center gap-2 text-[10px] font-semibold">
                  Subscribe <FiArrowRight />
                </button>
              </div>
              <p className="text-[9px] text-white/40 mt-2 text-center">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>

        {/* Ultimate Plan */}
        <div className="relative w-[280px] rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] text-left shadow-xl overflow-hidden">
          <div className="ml-auto right-0 top-0 absolute rounded-lg flex items-center justify-center text-2xl">
            <img
              src={img113}
              alt="Description"
              className="w-20 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <div className="p-6">
              <h3 className="text-white text-sm font-semibold mb-1">
                Ultimate
              </h3>
              <div className="top-3 w-16 text-center mb-3 mt-3 left-3 z-20 border-white/10 border-1 text-white text-[9px] px-3 py-[3px] rounded">
                Popular
              </div>
              <p className="text-2xl font-bold mb-2">
                <sub className="text-sm align-sub/4">$</sub>
                {billingCycle === "monthly" ? "59.99" : "49.99"}{" "}
                <span className="text-xs font-normal">/mo</span>
              </p>
              <p className="text-[10px] text-white/50 mb-4">
                ${billingCycle === "monthly" ? "719.88" : "599.88"} / yr
              </p>
              <p className="text-[10px] text-center mb-3 mt-2 leading-tight">
                For data-driven traders, <br />
                advanced backtesting with AI.
              </p>
            </div>
            <div className="bg-white text-black rounded-t-2xl pt-4 pb-6 px-4 space-y-2 text-[10px]">
              <p>All premium features</p>
              <p>✨ AI Backtesting platform access w/ all toolkits</p>
              {ultimateExtra.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="border border-green-500 bg-white rounded-full p-[3px]">
                    <FaCheck className="text-green-500 text-[6px]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
              <div className="flex justify-center">
                <button className="bg-gray-700 text-white py-1 px-2 mt-0.5 mb-0.5 rounded-full flex items-center justify-center gap-2 text-[10px] font-semibold">
                  Subscribe <FiArrowRight />
                </button>
              </div>
              <p className="text-[9px] text-black/40 mt-2 text-center">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
