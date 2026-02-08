import { memo, useMemo } from "react";
import { useIntersectionObserver } from '../utils/useIntersectionObserver';
import { getOptimalSparkCount, generateSparkPositions } from '../utils/performance';
import TracksPage from "../animations/Track";

const Tracks = memo(() => {
  const [sectionRef, showEffects] = useIntersectionObserver({ once: true });

  return (
    <div ref={sectionRef} id="tracks" className="relative  w-full min-h-screen overflow-hidden">

      <div className="absolute inset-0 bg-linear-to-b from-red-950/50 via-black to-black opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.18),transparent,black)]" />


      {showEffects && <ConfettiSparks />}


      <div className="max-w-337.5 mx-auto px-4 sm:px-8 lg:px-12 py-15  md:py-15">

        <div className="flex flex-col items-center text-center gap-3 sm:gap-6">
          {/* title */}
          <h1
            className="
              text-3xl sm:text-5xl md:text-7xl
              font-extrabold tracking-widest
              text-red-600 glowUp font-display
            "
          >
            EXPLORE TRACKS
          </h1>
        </div>

        <div className="py-5 relative">
          <h1 className="font-track text-center tracking-widest font-extrabold md:text-4xl  text-[red]"> Choose Your Weapon To Fight </h1>

        </div>

        <div
          className=" 
                        flex justify-center items-center 
                animate-float
                drop-shadow-[1px_1px_12px_rgba(255,0,0,0.65)]
              "
        >
          <img
            src="/finalAliens.png"
            alt="Alien Warrior"
            draggable="false"
            className=""
          />
        </div>



        <div className="  ">
          <TracksPage />
        </div>
      </div>


      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px);  }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 2s ease-in-out infinite;
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
    </div>
  );
});

export default Tracks;

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