import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function NavBar() {
  const [openMenu, setOpenMenu] = useState<"features" | "resources" | null>(
    null
  );
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Fermer le menu si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="z-50 relative bg-[#020b23]">
      <header className="flex justify-between items-center px-10 py-1.5">
        <div className="text-white text-base font-bold"></div>

        <nav
          className="hidden md:flex items-center space-x-5 text-[12px] text-white/80"
          ref={menuRef}
        >
          {/* Features */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenMenu((prev) => (prev === "features" ? null : "features"))
              }
              className="flex items-center gap-1 hover:text-white"
            >
              Features <ChevronDown size={10} />
            </button>
            {openMenu === "features" && (
              <div className="absolute bg-[#0b0f1e] mt-1 py-2 rounded shadow text-[10px] w-32 z-50">
                <Link
                  to="/feature1"
                  className="block px-4 py-1 hover:bg-[#1a2238] hover:text-white"
                  onClick={() => setOpenMenu(null)}
                >
                  AI Signals
                </Link>
                <Link
                  to="/feature2"
                  className="block px-4 py-1 hover:bg-[#1a2238] hover:text-white"
                  onClick={() => setOpenMenu(null)}
                >
                  Backtesting
                </Link>
              </div>
            )}
          </div>

          {/* Resources */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenMenu((prev) =>
                  prev === "resources" ? null : "resources"
                )
              }
              className="flex items-center gap-1 hover:text-white"
            >
              Resources <ChevronDown size={10} />
            </button>
            {openMenu === "resources" && (
              <div className="absolute bg-[#0b0f1e] mt-1 py-2 rounded shadow text-[10px] w-32 z-50">
                <Link
                  to="/faqSection"
                  className="block px-4 py-1 hover:bg-[#1a2238] hover:text-white"
                  onClick={() => setOpenMenu(null)}
                >
                  FAQs
                </Link>
                <Link
                  to="/guides"
                  className="block px-4 py-1 hover:bg-[#1a2238] hover:text-white"
                  onClick={() => setOpenMenu(null)}
                >
                  Guides
                </Link>
              </div>
            )}
          </div>

          {/* Autres liens */}
          <Link to="/faqSection" className="hover:text-white">
            Library
          </Link>

          <Link to="/tarification" className="hover:text-white">
            Pricing
          </Link>

          {/* Boutons */}
          <div>
            <button className="text-white/90 px-3 py-1 border border-white/30 rounded-full hover:bg-white hover:text-black transition text-[12px] bg-gray-700">
              Log In
            </button>
            <button className="ml-2 px-3 py-1 bg-white text-black rounded-full hover:opacity-90 transition text-[12px]">
              Sign Up
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
