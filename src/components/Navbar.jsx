import { memo, useCallback, useMemo, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedSabres } from "react-icons/gi";
import { Link as ScrollLink } from "react-scroll";

const NAV_LINKS = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "tracks", label: "Tracks" },
  { to: "prize", label: "Prize" },
  { to: "timeline", label: "Timeline" },
  { to: "rules", label: "Rules" },
  { to: "faqs", label: "FAQs" },
  { to: "contact", label: "Contacts" },
];

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="w-full  fixed top-0  z-50 px-4 md:px-10 lg:px-20 py-5">



      <div className="relative ">
        <div className="absolute animate-pulse inset-0 bg-red-600 blur-xl opacity-30 rounded-full"></div>

        <div className="relative flex justify-between items-center h-16 px-6 md:px-10 rounded-full border border-red-600 bg-gray-950/70 backdrop-blur-2xl">

          {/* Logo Section */}
          <div  className="flex items-center gap-2 shrink-0">
            <img
              src="/logo.png"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wider font-light text-red-600 whitespace-nowrap">
              GDG HACKER CUP
            </h1>
          </div>


          <div className="hidden lg:flex gap-6 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer tracking-[2px] text-xs xl:text-sm text-gray-100 hover:font-bold hover:scale-105 hover:text-red-600 font-normal transition-all duration-300 whitespace-nowrap"
              >
                {link.label.toUpperCase()}
              </ScrollLink>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-200 cursor-pointer shrink-0"
          >
            {isOpen ? <GiCrossedSabres size={28} /> : <TiThMenu size={28} />}
          </button>
        </div>

        <div
          className={`absolute top-20 right-4 w-56 rounded-2xl border border-red-400/80
          bg-red-500/10 backdrop-blur-xl shadow-xl overflow-hidden
          transform transition-all duration-500 ease-in-out
          ${isOpen
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-10 scale-95 pointer-events-none"
            }`}
        >
          <div className="flex flex-col gap-5 py-6 px-6 cursor-pointer">
            {NAV_LINKS.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className="text-gray-100 tracking-widest text-sm hover:text-red-500 transition duration-300"
              >
                {link.label.toUpperCase()}
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Navbar;
