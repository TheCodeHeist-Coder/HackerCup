
import { motion } from "motion/react"
import { FaFlagCheckered, FaSnowboarding, FaBolt, FaTrophy } from "react-icons/fa";
import { useEffect, useState } from "react";

const timelineData = [
    {
        title: "Registration Opens",
        date: "Nov 25, 2025",
        icon: <FaSnowboarding />,
        desc: "Warriors enter the arena. Choose your weapon and sign up.",
    },
    {
        title: "Online PPT Submission Starts",
        date: "Nov 25, 2025",
        icon: <FaBolt />,
        desc: "Try to Enter in The BattleField",
    },
    {
        title: "PPT Submission Deadline",
        date: "Feb 28, 2026",
        icon: <FaFlagCheckered />,
        desc: "Final strike. Submit your innovation before time ends.",
    },
    {
        title: "Final Offline Round",
        date: "March 17, 2026",
        icon: <FaTrophy />,
        desc: "Champions rise. Glory, prizes, and rewards await.",
    },
];

export default function TimeLines() {
    const [showFinalBlast, setShowFinalBlast] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowFinalBlast(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="timeline" className="relative w-full min-h-screen bg-black text-white py-24 px-4 overflow-hidden">

            <div className="absolute inset-0 fog-layer" />

            
            <FloatingSparks />


            <div className="relative max-w-6xl mx-auto text-center mb-20 z-10">
                <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-widest text-red-600 glowUp">
                    BATTLE TIMELINE
                </h1>

                <p className="mt-5 text-lg sm:text-2xl md:text-4xl tracking-widest font-extrabold text-[red] font-track">
                    Your Warrior Campaign Begins Here ⚔️
                </p>

                <div className="mt-8 sword-divider mx-auto" />
            </div>

            <div className="relative max-w-6xl mx-auto z-10">
                {/* Center Energy Line */}
                <div className="sm:hidden absolute left-1/2 top-0 w-0.75 h-full bg-red-600 opacity-40" />
                <div className="hidden sm:block absolute left-1/2 top-0 w-0.75 h-full energy-line" />


                {/* Timeline Items */}
                <div className="flex flex-col gap-20">
                    {timelineData.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 70 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                viewport={{ once: true }}
                                className="relative flex flex-col sm:flex-row items-center w-full"
                            >

                                <div className="hidden sm:flex w-1/2 justify-end pr-12">
                                    {isLeft && <TimelineCard item={item} />}
                                </div>


                                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-20">
                                    <div className="timeline-node">{item.icon}</div>
                                </div>


                                <div className="hidden sm:flex w-1/2 justify-start pl-12">
                                    {!isLeft && <TimelineCard item={item} />}
                                </div>

                               
                                <div className="sm:hidden relative w-full flex flex-col items-center">

                                   
                                    <div className="relative z-20 mb-6">
                                        <div className="mobile-node">{item.icon}</div>
                                    </div>

                                    <div className="w-full max-w-105 mx-auto">
                                        <TimelineCard item={item} />
                                    </div>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>

            </div>


            {showFinalBlast && (
                <div className="relative mt-24 text-center z-10">
                    <div className="final-blast">
                        🏆 GLORY AWAITS — MARCH 17, 2026
                    </div>
                </div>
            )}

            <style>
                {`
        .fog-layer {
          background: radial-gradient(circle, rgba(255,0,0,0.18), transparent 70%),
                      linear-gradient(to bottom, rgba(30,0,0,0.7), black);
          animation: fogMove 8s ease-in-out infinite alternate;
          filter: blur(70px);
          opacity: 0.6;
        }

        @keyframes fogMove {
          from { transform: translateX(-50px); }
          to { transform: translateX(50px); }
        }

        .energy-line {
          background: linear-gradient(to bottom, rgba(255,0,0,0.9), transparent);
          box-shadow: 0 0 25px rgba(255,0,0,0.6);
        }

        .timeline-node {
          width: 70px;
          height: 70px;
          border-radius: 999px;
          background: black;
          border: 2px solid red;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: red;
          box-shadow: 0 0 35px rgba(255,0,0,0.85);
          animation: pulseGlow 2s infinite;
        }

        .mobile-node {
  width: 55px;
  height: 55px;
  border-radius: 999px;
  background: black;
  border: 2px solid red;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  color: red;

  box-shadow: 0 0 25px rgba(255,0,0,0.8);
}


        @keyframes pulseGlow {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }

      .timeline-card {
  width: 100%;
  max-width: 420px;
  margin: auto;
  text-align: left;

  padding: 24px;
  border-radius: 22px;
  border: 1px solid rgba(255,0,0,0.35);
  background: linear-gradient(to bottom right, rgba(80,0,0,0.35), black);
  box-shadow: 0 0 40px rgba(255,0,0,0.15);
  transition: 0.4s ease;
}

        .timeline-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255,0,0,0.5);
        }

        .sword-divider {
          width: 240px;
          height: 3px;
          background: linear-gradient(to right, transparent, red, transparent);
          box-shadow: 0 0 25px red;
        }

        .final-blast {
          display: inline-block;
          padding: 16px 34px;
          border-radius: 999px;
          background: rgba(255,0,0,0.12);
          border: 1px solid rgba(255,0,0,0.5);
          color: white;
          font-weight: bold;
          letter-spacing: 0.15em;
          text-shadow: 0 0 25px red;
          animation: blast 1.8s ease-in-out infinite alternate;
        }

        @keyframes blast {
          from { transform: scale(1); opacity: 0.85; }
          to { transform: scale(1.08); opacity: 1; }
        }

        .spark {
          position: absolute;
          width: 6px;
          height: 6px;
          background: red;
          border-radius: 50%;
          opacity: 0.8;
          animation: fall 3s linear infinite;
        }

        @keyframes fall {
          from { transform: translateY(-40px); opacity: 1; }
          to { transform: translateY(650px); opacity: 0; }
        }
        `}
            </style>
        </div>
    );
}


function TimelineCard({ item }) {
    return (
        <div className="timeline-card">
            <h2 className="text-xl font-track sm:text-2xl font-bold text-red-500  tracking-wider">
                {item.title}
            </h2>

            <p className="text-md text-red-300 mt-1 tracking-widest font-name">
                {item.date}
            </p>

            <p className="mt-4 text-gray-200 font-normal leading-relaxed font-name tracking-wide">{item.desc}</p>

            <div className="slash-line mt-6" />
        </div>
    );
}


function FloatingSparks() {
    return (
        <>
            {Array.from({ length: 18 }).map((_, i) => (
                <span
                    key={i}
                    className="spark"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 20}%`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}
        </>
    );
}
