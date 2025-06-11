import React from "react";

function FaqSection() {
  const questions = [
    "How does it work?",
    "Which plan should I choose?",
    "What markets are supported?",
    "Does it work on MetaTrader 4/5?",
    "Can I win every trade using this?",
    "How do discounts work?",
    "Is this friendly for beginners?",
    "Can I change my plan anytime?",
  ];
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-[#030617] via-[#08142c] to-[#150624] text-white font-sans">
        {/* FAQ SECTION */}
        <section className="flex flex-row w-[60%] mx-auto items-start gap-12 pt-16">
          <div className="w-1/2  p-4 text-white rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Frequent questions</h2>
          </div>

          <div className="w-1/2">
            {questions.map((q, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-white/10 py-4 text-sm md:text-base text-white hover:text-white/90"
              >
                <span>{q}</span>
                <span className="text-xl text-white/50">+</span>
              </div>
            ))}
          </div>
        </section>

        {/* CARDS SECTION */}
        <section className="relative px-6 md:px-12 mt-24 mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-600/20 blur-3xl opacity-40" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-[#0a0f2c] p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.01] transition">
              <div className="mb-6">
                <div className="ml-auto w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl">
                  🔍
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Explore all features
              </h3>
              <p className="text-sm text-white/70 mb-6">
                Learn how LuxAlgo works and all about how you can upgrade your
                charts to the next level.
              </p>
              <button className="text-sm border border-white/30 px-4 py-2 rounded-full bg-white text-black transition">
                Explore Features →
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0a0f2c] p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.01] transition">
              <div className="mb-6">
                <div className="ml-auto w-12 h-12 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-2xl">
                  🖥️
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a plan</h3>
              <p className="text-sm text-white/70 mb-6">
                Get a plan that suits your style of trading and level up your
                analysis.
              </p>
              <button className="text-sm border border-white/30 px-4 py-2 rounded-full bg-white text-black transition">
                Choose Plan →
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FaqSection;
