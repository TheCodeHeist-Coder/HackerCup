import { memo, useMemo } from "react";
import { useIntersectionObserver } from '../utils/useIntersectionObserver';
import { getOptimalSparkCount, generateSparkPositions } from '../utils/performance';
import { FaTrophy } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import { LuScrollText } from "react-icons/lu";
import { CiStar } from "react-icons/ci";

const Prizes = memo(() => {
  const [sectionRef, showEffects] = useIntersectionObserver({ once: true });

  return (
    <section
      id="prize"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black py-8 px-6 overflow-hidden"
    >

      <div className="absolute inset-0 bg-linear-to-b from-red-950/50 via-black to-black opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.18),transparent,black)]" />


      {showEffects && <ConfettiSparks />}


      <div className="relative max-w-312.5 mx-auto text-center">

        {/* Heading */}
        <div>
          <h1 className="
              text-3xl sm:text-5xl md:text-7xl
              font-extrabold tracking-widest
              text-red-600 glowUp font-display mb-6
            "> PRIZES  </h1>
        </div>


        <div className=" pb-8 relative">
          <h1 className="font-track tracking-widest font-extrabold md:text-4xl  text-[red]"> Victory Belongs to Those Who Build Fearlessly </h1>

        </div>

        {/* IMagee */}

        <div className="flex items-center justify-center drop-shadow-[1px_1px_12px_rgba(255,0,0,0.65)] animate-pulse">
          <img loading="lazy" className="" src="/finalPrize03.png" alt="" draggable='false' />
        </div>









        <div className="ceremony-banner relative">
          <h2 className="text-sm tracking-[0.4em] text-gray-300 uppercase">
            Winner’s Ceremony
          </h2>

          <h1 className="mt-3 text-5xl sm:text-7xl font-extrabold tracking-widest text-red-600 glowUp font-track">
            PRIZE ARENA
          </h1>

          <p className="mt-4 text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto font-name tracking-wider">
            Only the strongest warriors claim the legendary rewards ⚔️🔥
          </p>
        </div>


        {/* Prizes */}

       <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 font-name tracking-wider">

  <div className="order-2 md:order-1">
    <PrizeCard
      icon={<FaMedal className="w-12 h-12 text-gray-200" />}
      title="2nd Prize"
      amount="₹15,000"
      subtitle="Silver Warrior Reward"
    />
  </div>

  <div className="order-1 md:order-2">
    <PrizeCard
      icon={<FaTrophy className="w-14 h-14 text-yellow-400 trophy-shine" />}
      title="1st Prize"
      amount="₹30,000"
      subtitle="Champion of GDG Hacker Cup"
      highlight
    />
  </div>

  <div className="order-3 md:order-3">
    <PrizeCard
      icon={<FaMedal className="w-12 h-12 text-orange-400" />}
      title="3rd Prize"
      amount="₹10,000"
      subtitle="Bronze Warrior Reward"
    />
  </div>

</div>


        <div
          className="
            mt-20 
            rounded-2xl border border-red-500/30 
            bg-linear-to-r from-red-950/60 to-black 
            p-10 text-center shadow-[0_0_12px_rgba(255,0,0,0.4)]
          "
        >
          <div className="flex justify-center mb-4">
            <LuScrollText className="w-14 h-14 text-red-400" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-wider font-track text-white">
            Participation Certificates for All
          </h2>

          <p className="mt-3 text-gray-400 text-lg font-name tracking-wider max-w-2xl mx-auto">
            Every warrior who enters the battlefield will receive an official
            <span className="text-red-400 font-semibold">
              {" "}
              GDG Hacker Cup Certificate of Participation
            </span>
            .
          </p>

          {/* Sparks */}
          <div className="mt-6 flex justify-center gap-2 text-red-500">
            <CiStar className="w-10 h-10 font-bold animate-pulse" />
            <CiStar className="w-10 h-10 font-bold animate-pulse" />
            <CiStar className="w-10 h-10 font-bold animate-pulse" />
          </div>
        </div>
      </div>

      <style>
        {`
        /* Ceremony Banner Glow */
        .ceremony-banner {
          padding: 40px;
          border-radius: 30px;
          border: 1px solid rgba(255,0,0,0.25);
          background: linear-gradient(to right, rgba(80,0,0,0.35), rgba(0,0,0,0.8));
          box-shadow: 0 0 15px rgba(255,0,0,0.25);
        }

        /* Trophy Shine Sweep */
        .trophy-shine {
          position: relative;
          animation: shine 2.5s infinite;
        }

        @keyframes shine {
          0% { filter: drop-shadow(0 0 0px gold); }
          50% { filter: drop-shadow(0 0 25px gold); }
          100% { filter: drop-shadow(0 0 0px gold); }
        }

        /* Loot Chest Opening */
        .loot-box {
          padding: 60px 30px;
          border-radius: 30px;
          border: 1px solid rgba(255,0,0,0.3);
          background: rgba(255,255,255,0.03);
          box-shadow: 0 0 12px rgba(255,0,0,0.35);
        }

        .loot-chest {
          width: 110px;
          height: 80px;
          margin: 0 auto;
          background: red;
          border-radius: 15px;
          position: relative;
          overflow: hidden;
          animation: chestOpen 2.2s ease-in-out infinite;
          box-shadow: 0 0 30px rgba(255,0,0,0.7);
        }

        .loot-chest::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 45%;
          background: rgba(255,255,255,0.15);
          transform-origin: bottom;
          animation: lid 2.2s ease-in-out infinite;
        }

        @keyframes lid {
          0%, 100% { transform: rotateX(0deg); }
          50% { transform: rotateX(75deg); }
        }

        @keyframes chestOpen {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .spark {
          position: absolute;
          width: 6px;
          height: 6px;
          background: red;
          border-radius: 50%;
          opacity: 0.8;
          animation: sparkFall 1.8s linear infinite;
        }

        @keyframes sparkFall {
          from {
            transform: translateY(-40px) scale(1);
            opacity: 1;
          }
          to {
            transform: translateY(300px) scale(0);
            opacity: 0;
          }
        }
        `}
      </style>
    </section>
  );
});

export default Prizes;

const PrizeCard = memo(function PrizeCard({ icon, title, amount, subtitle, highlight }) {
  return (
    <div
      className={`
        relative rounded-3xl p-10 border
        ${highlight ? "border-red-500 bg-red-950/40 md:scale-[1.08] scale-[1.04] " : "border-white/15 bg-white/5"}
        backdrop-blur-md transition-all duration-300
        hover:scale-[1.05]
        hover:shadow-[0_0_22px_rgba(255,0,0,0.55)]
      `}
    >
      <div className="flex justify-center">{icon}</div>

      <h3 className="mt-6 text-2xl font-bold tracking-widest text-white">
        {title}
      </h3>

      <p className="mt-4 text-4xl font-extrabold text-red-500 drop-shadow-lg">
        {amount}
      </p>

      <p className="mt-3 text-gray-400">{subtitle}</p>
    </div>
  );
});

const ConfettiSparks = memo(() => {
  const sparkCount = useMemo(() => Math.min(getOptimalSparkCount(), 15), []);
  const sparks = useMemo(() => generateSparkPositions(sparkCount, { topMax: 20, animationDelayMax: 1.2 }), [sparkCount]);

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







