
import { memo, useEffect, useRef, useState, useMemo } from "react";
import { FaBroadcastTower } from "react-icons/fa";
import { MdOutlineHandshake } from "react-icons/md";
import { generateSparkPositions, getOptimalSparkCount } from "../utils/performance";

export default function SponsorPage() {
   const [showFinalBlast, setShowFinalBlast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFinalBlast(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="sponsor"
      className="relative min-h-screen bg-black overflow-hidden px-6 py-10 md:py-15"
    >
      <div className="absolute inset-0 bg-linear-to-b from-red-950/40 via-black to-black" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,0,0,0.3),transparent,black)]" />

        <FloatingSparks />
     
      <div className="relative max-w-6xl mx-auto text-center z-10">
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[0.25em] text-red-600 glowUp font-display">
          OUR SPONSERS
        </h1>

        <p className="mt-8 text-[red] font-extrabold tracking-widest font-track text-sm md:text-3xl">
          SIGNAL FOUND • ALLY IDENTIFIED • SUPPORT CONFIRMED
        </p>

        {/* Box */}
        <div className="mt-20 flex justify-center">
          <div
            className={`
              relative w-full max-w-175
              rounded-[2.5rem]
              border border-red-500/40
              bg-black/60 backdrop-blur-xl
              px-10 py-16
              shadow-[0_0_80px_rgba(255,0,0,0.25)]
              overflow-hidden
              transition-all duration-700
              
            `}
          >
            
            <div className="flex justify-between text-xs text-gray-300 tracking-[0.3em] uppercase">
              <span>GDG WAR NETWORK</span>
              <span className="text-red-500">ACCESS GRANTED</span>
            </div>

            
            <div className="mt-6 h-0.5 w-full bg-linear-to-r from-transparent via-red-600 to-transparent animate-pulse" />

            
            <div className="mt-12">
              <div className="flex justify-center mb-6">
                <FaBroadcastTower className="w-14 h-14 text-red-500 animate-pulse" />
              </div>

              <h2 className="text-gray-300 text-sm tracking-[0.4em] uppercase">
                Official Mission Sponsor
              </h2>
               
               {/* spnser name */}
              <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-widest text-white font-track glitchText">
                XYZ COMPANY
              </h1>

              {/* Sponsor Logo */}
              <div className="mt-10 flex justify-center">
                <div className="w-44 h-44 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center text-gray-600 tracking-widest">
                  LOGO
                </div>
              </div>

              
              <p className="mt-10 text-gray-400 tracking-wider leading-relaxed max-w-xl mx-auto">
                This ally has chosen to empower the warriors of innovation.
                <br />
                The battlefield is stronger because of their support.
              </p>
            </div>

            
            <div className="absolute bottom-0 left-0 w-full py-3 bg-red-600/10 border-t border-red-500/20 text-xs tracking-[0.35em] text-gray-500 uppercase">
              Classified Sponsor Transmission • Do Not Ignore
            </div>
          </div>
        </div>

        
        <div className="mt-20 flex justify-center">
          <a
            href="mailto:gdgknit@knit.ac.in"
            className="px-12 py-4  shadow-[2px_4px_16px_rgba(255,0,0,1)] rounded-full border-2 border-red-600 text-gray-200 font-semibold tracking-widest hover:bg-red-600 hover:text-white transition flex items-center gap-3"
          >
            <MdOutlineHandshake className="w-6 h-6" />
            Join As Sponsor
          </a>
        </div>

        <p className="mt-24 text-gray-600 tracking-[0.5em] uppercase text-sm">
          Transmission Ends — Ally Locked In
        </p>
      </div>

   

    </section>
  );
}



const FloatingSparks = memo(() => {
  const sparkCount = useMemo(() => getOptimalSparkCount(), []);
  const sparks = useMemo(() => generateSparkPositions(sparkCount), [sparkCount]);

  return (
    <>
      {sparks.map((spark) => (
        <span
          key={spark.key}
          className="spark"
          style={{
            left: spark.left,
            top: spark.top,
            animationDelay: spark.animationDelay,
          }}
        />
      ))}
    </>
  );
});
