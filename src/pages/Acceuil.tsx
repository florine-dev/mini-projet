import React from "react";
import Diagramme from "../Components/Diagramme";

function Acceuil() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background1.png')" }}
    >
      <div className="min-h-screen bg-gradient-to-br from-[#030617] via-[#08142c] to-[#150624] text-white font-sans">
        <main className="flex flex-col items-center text-center px-6 md:px-0 pt-24 ">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Supercharge your <br />
            <span className="text-[#3db8ff]">trading strategy</span>
          </h1>
          <p className="mt-5 text-white/80 text-base max-w-xl">
            Unlock the best trading indicators and
            <br /> AI agent for backtesting used by 15,000+ traders.
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-black rounded-full text-sm hover:shadow-lg transition">
            Get 30 Days Risk Free →
          </button>

          <div className="mt-20 w-full flex justify-center px-4">
            <Diagramme />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Acceuil;
