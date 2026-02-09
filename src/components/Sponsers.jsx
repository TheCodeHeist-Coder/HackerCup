
import { useEffect, useRef, useState } from "react";
import { FaBroadcastTower } from "react-icons/fa";
import { MdOutlineHandshake } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";

export default function SponsorPage() {
  const sectionRef = useRef(null);
  const [unlock, setUnlock] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setUnlock(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);



  return (
    <section
      id="sponsor"
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden px-6 md:py-12 py-4"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-linear-to-b from-red-950/50 via-black to-black" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,0,0,0.35),transparent,black)]" />

      {/* Sparks */}
      {unlock && <RedParticles />}

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-widest text-red-600 glowUp font-display">
          SPONSOR SIGNAL
        </h1>

        <p className="mt-5 text-[red] tracking-widest md:text-4xl font-extrabold font-track text-lg">
          Every Warrior Needs a Backer 
        </p>


        {/*image */}
        <div className="flex glow-blink mx-w-155 items-center justify-center">

          <img  className="
          /* Cinematic Fade Mask */
      mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
      mask-size-[100%_100%]
      mask-no-repeat

      /* For Safari Support */
      [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
      [-webkit-mask-size:100%_100%]
      [-webkit-mask-repeat:no-repeat]"
      draggable='false'
      src="/sponser03.png" alt="" />

        </div>

        {/* Terminal Box */}
        <div className=" flex justify-center">
          <div
            className={`
              relative w-full max-w-160
              rounded-[2.5rem]
              border border-red-500/40
              bg-black/70 backdrop-blur-xl
              px-10 py-14
              shadow-[0_0_90px_rgba(255,0,0,0.28)]
              overflow-hidden
              transition-all duration-400
              ${unlock ? "opacity-100 scale-100" : "opacity-60 scale-90"}
            `}
          >
            {/* HUD Top */}
            <div className="flex justify-between font-semibold font-name text-xs text-gray-500 tracking-[0.3em] uppercase">
              <span>GDG WAR NETWORK</span>
              <span className="text-red-500 text-md  animate-pulse">
                SLOT LOCKED
              </span>
            </div>

            {/* Divider */}
            <div className="mt-6 h-0.5 w-full bg-linear-to-r from-transparent via-red-600 to-transparent animate-pulse" />

            {/* Coming Soon Reveal */}
            <div className="md:mt-8 mt-3">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <FaBroadcastTower className="w-14 h-14  text-red-500 animate-pulse" />
              </div>

              <h2 className="text-gray-300 text-sm tracking-[0.45em] uppercase">
                Sponsor Transmission Status
              </h2>

              {/* Main Coming Soon Text */}
              <h1 className="md:mt-8 mt-4 md:text-5xl text-3xl sm:text-6xl font-extrabold tracking-widest text-white font-track glitchText">
                COMING SOON
              </h1>

              {/* Locked Slot Box */}
              <div className="md:mt-12 mt-7  flex justify-center">
                <div className="w-52 h-52 rounded-3xl border border-red-500/30 bg-red-950/20 flex flex-col items-center justify-center gap-4 shadow-[0_0_50px_rgba(255,0,0,0.25)] animate-float">
                  <FiAlertTriangle className="w-14 h-14 text-red-500" />
                  <p className="text-gray-200 font-name tracking-widest text-sm uppercase">
                    Ally Slot Locked
                  </p>
                  <p className="text-red-500 font-name font-bold tracking-[0.3em] text-xs">
                    Awaiting Sponsor...
                  </p>
                </div>
              </div>

              {/* Lore Text */}
              <p className="md:mt-4 pb-5 md:pb-2 mt-2 text-gray-200 tracking-wider leading-relaxed max-w-xl mx-auto">
                The battlefield is ready.
                <br />
                The first legendary ally will soon appear here.
                <span className="text-red-500 font-semibold">
                  {" "}
                  Your brand could be the one.
                </span>
              </p>
            </div>

            {/* Bottom Warning Strip */}
            <div className="absolute bottom-0 left-0 w-full py-3 px-2 bg-red-600/10 border-t border-red-500/20 text-xs tracking-[0.35em] text-gray-400 uppercase">
              Sponsor Slot Unclaimed • Transmission Active • Coming Soon
            </div>
          </div>
        </div>

        {/* CTA */}




        
        <div className="mt-20  flex justify-center">
          <a
               href="https://mail.google.com/mail/?view=cm&to=gdgknit@knit.ac.in"
            target="_blank"
           rel="noopener noreferrer"
            className="px-12 font-display md:text-xl text-sm shadow-[2px_4px_20px_rgba(255,0,0,1)] transition-all duration-300 py-4 rounded-full border-2 border-red-600 text-gray-200 font-semibold tracking-widest hover:bg-red-600 hover:text-white  flex items-center gap-3"
          >
            <MdOutlineHandshake className="w-6 h-6" />
            Become Our Sponsor
          </a>
        </div>

        {/* Ending */}
        <p className="mt-24 text-gray-600 tracking-[0.5em] uppercase text-sm">
          Transmission Ends — Awaiting Ally Arrival
        </p>
      </div>

      {/* Styles */}
      <style>
        {`
        .glowUp {
          text-shadow: 0 0 25px rgba(255,0,0,0.85);
        }

        /* Glitch Effect */
        .glitchText {
          position: relative;
          animation: glitch 2s infinite;
        }

        @keyframes glitch {
          0% { text-shadow: 2px 0 red; }
          25% { text-shadow: -2px 0 crimson; }
          50% { text-shadow: 3px 0 red; }
          75% { text-shadow: -3px 0 darkred; }
          100% { text-shadow: 2px 0 red; }
        }

        /* Floating Slot */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 3.2s ease-in-out infinite;
        }

        /* Sparks */
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: red;
          border-radius: 50%;
          opacity: 0.7;
          animation: fall 2.6s linear infinite;
        }

        @keyframes fall {
          from { transform: translateY(-40px); opacity: 1; }
          to { transform: translateY(700px); opacity: 0; }
        }
        `}
      </style>
    </section>
  );
}

/* Sparks */
function RedParticles() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 25}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </>
  );
}
