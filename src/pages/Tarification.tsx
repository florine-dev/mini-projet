import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCheck, FaGem } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const sharedFeatures = [
  "Price Action Concepts toolkit + screener",
  "Signals & Overlays toolkit + screener",
  "Oscillator Matrix toolkit + screener",
  "Advanced tools alerts on TradingView",
  "Alerts & strategies access in Discord",
];

const ultimateExtra = [
  "✨ AI Backtesting platform access w/ all toolkits",
  "Full suite w/ 3 Backtesters on TradingView",
  "Deep optimization engine for signal settings",
  "Scanners, bots, & backtests shared weekly",
  "Priority 24/7 support & active product updates",
];

const PricingSection = () => {
  return (
    <section className="bg-[#0b1120] text-white py-20 px-4 md:px-12 text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-10">
        Plans for every style of trading
      </h2>

      {/* Countdown */}
      <div className="flex justify-center gap-2 text-white mb-6">
        {["09", "19", "19", "12"].map((val, i) => (
          <div key={i} className="bg-[#111827] p-4 rounded-md w-16">
            <div className="text-2xl font-semibold">{val}</div>
            <div className="text-xs text-gray-400">
              {["Days", "Hours", "Minutes", "Seconds"][i]}
            </div>
          </div>
        ))}
      </div>

      {/* Switcher */}
      <div className="flex flex-col justify-center items-center gap-2 text-sm mb-10">
        <span className="bg-[#0f172a] px-3 py-1 rounded-full border border-white/10 text-white">
          Pay yearly, get up to an extra 40% off!
        </span>
        <div className="flex items-center border border-white/20 rounded-full overflow-hidden text-sm">
          <button className="px-4 py-1 bg-white text-black font-medium rounded-l-full">
            Monthly
          </button>
          <button className="px-4 py-1 text-white hover:bg-white/10 transition rounded-r-full">
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
        {/* Premium */}
        <div className="relative w-[320px] rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] text-left shadow-xl overflow-hidden">
          <FaGem className="absolute top-4 right-4 text-cyan-400 text-2xl" />
          <div>
            <div className="p-6">
              <h3 className="text-white text-base font-semibold mb-1">
                Premium
              </h3>
              <p className="text-3xl font-bold">
                $39.99 <span className="text-sm font-normal">/mo</span>
              </p>
              <p className="text-xs text-white/50 mb-4">$479.88 / yr</p>
              <p className="text-xs text-center mb-6 leading-tight">
                For active traders, the best <br />
                set of indicators & signals.
              </p>
            </div>

            <div className="bg-[#1e293b] rounded-b-2xl p-4 space-y-2 text-xs rounded-t-2xl mt-1.5">
              {sharedFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="border border-green-500 bg-white rounded-full p-[3px]">
                    <FaCheck className="text-green-500 text-[10px]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
              <button className="w-full bg-white text-black py-2 mt-4 rounded-md flex items-center justify-center gap-2 text-sm font-semibold">
                Subscribe <FiArrowRight />
              </button>
              <p className="text-[10px] text-white/40 mt-2 text-center">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>

        {/* Ultimate */}
        <div className="relative w-[320px] rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] text-left shadow-xl overflow-hidden">
          {/* Popular badge should be ON TOP */}
          <div className="absolute top-3 left-3 z-20 bg-white/10 text-white text-[10px] px-2 py-[2px] rounded-full">
            Popular
          </div>
          {/* Icon under the badge */}
          <BsStars className="absolute top-4 right-4 text-purple-400 text-2xl z-10" />
          <div>
            <div className="p-6">
              <h3 className="text-white text-base font-semibold mb-1">
                Ultimate
              </h3>
              <p className="text-3xl font-bold">
                $59.99 <span className="text-sm font-normal">/mo</span>
              </p>
              <p className="text-xs text-white/50 mb-4">$719.88 / yr</p>
              <p className="text-xs text-center mb-6 leading-tight">
                For data-driven traders, <br />
                advanced backtesting with AI.
              </p>
            </div>

            {/* white area with rounded top only */}
            <div className="bg-white text-black rounded-t-2xl pt-4 pb-6 px-4 space-y-2 text-xs">
              {ultimateExtra.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="border border-green-500 bg-white rounded-full p-[3px]">
                    <FaCheck className="text-green-500 text-[10px]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
              <button className="w-full bg-black text-white py-2 mt-4 rounded-md flex items-center justify-center gap-2 text-sm font-semibold">
                Subscribe <FiArrowRight />
              </button>
              <p className="text-[10px] text-black/40 mt-2 text-center">
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
