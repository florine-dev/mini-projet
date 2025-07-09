import React from "react";
import ImgDiagrame from "../assets/images/ImgDiagrame.png";
import backgroundImg from "../assets/images/font1.png";

function Acceuil() {
  return (
    <>
      <div>
        <div
          className="h-screen overflow-hidden  from-[#030617] via-[#08142c] to-[#150624] text-white font-sans flex flex-col items-center justify-center px-6 top-2  h-screen bg-cover bg-center "
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          {/* Texte et bouton */}
          <div className="text-center">
            <h1 className="text-4xl  font-bold leading-tight text-[40px]">
              Supercharge your <br />
              <span className="text-[#3db8ff] text-[36px]">
                trading strategy
              </span>
            </h1>
            <p className="mt-4 text-white/80 text-base max-w-xl mx-auto text-[12px]">
              Unlock the best trading indicators and
              <br /> AI agent for backtesting used by 15,000+ traders.
            </p>
            <button className="mt-6 px-3 py-1 bg-white text-black rounded-full text-sm hover:shadow-lg transition text-[10px]">
              Get 30 Days Risk Free →
            </button>
          </div>

          {/* Image */}
          <div className="mt-10">
            <img
              src={ImgDiagrame}
              alt="diagramme"
              className="max-w-[90vw] md:max-w-3xl rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Acceuil;
