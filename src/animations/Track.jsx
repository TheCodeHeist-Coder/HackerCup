import { useState, useEffect } from "react";
import { LuSword } from "react-icons/lu";
import { LuShield } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { LuSprout } from "react-icons/lu";

export default function TracksPage() {
  const [activeTrack, setActiveTrack] = useState(null);
  const [lockedWeapon, setLockedWeapon] = useState(null);

  const tracks = [
    {
      title: "Smart Cities & Sustainable Urban Tech",
      weapon: "Neural Blade",
      desc: "Build intelligent systems that evolve.",
      icon: FaBuilding,
      details:
        "Become a legendary warrior for saving a city. Best for futuristic builders.",
    },
    {
      title: "Cybersecurity",
      weapon: "Firewall Shield",
      desc: "Defend the digital kingdom.",
      icon: LuShield,
      details:
        "A shield forged in encryption flames. Perfect for defenders.",
    },
    {
      title: "AI-Powered Health & Well-Being Solutions",
      weapon: "Code Katana",
      desc: "Craft next-gen shield.",
      icon: FaGlobe,
      details:
        "A weapon works as a healing source. For nueral product with health warriors.",
    },
    {
      title: "Clean Energy, Climate Action & GreenTech",
      weapon: "Eco Flame Axe",
      desc: "A true warrior saves environmnt",
      icon: LuSprout,
      details:
        " Warriors who know very well to fight with Climate actions ",
    },
    {
      title: "Open Innovation",
      weapon: "Warrior’s Choice",
      desc: "Any bold idea enters battle.",
      icon: LuSword,
      details:
        "An axe burning with green energy. For planet-saving warriors.",
    },
    {
      title: "Inclusive Education & Digital Equality",
      weapon: "Edu Axe ",
      desc: "Protect the future with tech.",
      icon:  FaGraduationCap
,
      details:
        "Every warrior should be responsible and intelligent",
    },
  ];

  return (
    <div className=" text-white px-6  relative overflow-hidden">
      {/* Background Glow */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black to-black" /> */}

      

      {/* Tracks Grid */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {tracks.map((track, i) => {
          const Icon = track.icon;
          const isLocked = lockedWeapon === track.weapon;

          return (
            <div
              key={i}
              onClick={() => setActiveTrack(track)}
              className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300
              
              ${
                isLocked
                  ? "border-red-500 bg-red-950/50 shadow-[0_0_35px_rgba(255,0,0,0.8)] animate-unlockPulse"
                  : "border-red-600/60  hover:border-red-500 hover:shadow-[2px_15px_20px_rgba(255,0,0,0.5)]"
              }`}
            >
              {/* Icon */}
              <div className="flex justify-between items-center font-sans">
                <Icon
                  className={`w-10 h-10 ${
                    isLocked ? "text-red-400" : "text-red-500"
                  } cursor-pointer`}
                />

                {isLocked && (
                  <span className="text-xs px-3 py-1 rounded-full bg-red-600 font-bold tracking-widest cursor-pointer">
                    LOCKED ⚔
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="mt-5 text-2xl font-bold font-name">{track.title}</h2>

              {/* Desc */}
              <p className="mt-3 text-red-400 text-sm tracking-wide">{track.desc}</p>

              {/* Weapon */}
              <p className="mt-6 text-red-500 tracking-wider font-semibold ">
                ⚔ {track.weapon}
              </p>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {activeTrack && (
        <WeaponModal
          track={activeTrack}
          onClose={() => setActiveTrack(null)}
          onLock={(weapon) => setLockedWeapon(weapon)}
        />
      )}

      {/* Unlock Animation CSS */}
      <style>
        {`
        @keyframes unlockPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .animate-unlockPulse {
          animation: unlockPulse 0.6s ease-in-out;
        }
        `}
      </style>
    </div>
  );
}

/* ============================= */
/* Weapon Modal */
/* ============================= */

function WeaponModal({ track, onClose, onLock }) {
  const [locked, setLocked] = useState(false);

  const lockWeapon = () => {
    setLocked(true);

    // Close modal + lock card automatically
    setTimeout(() => {
      onLock(track.weapon);
      onClose();
    }, 1000);
  };

  const Icon = track.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
      {/* Modal Box */}
      <div className="relative w-[92%] max-w-xl rounded-3xl border border-red-500/40 
        bg-linear-to-b from-red-950/70 via-black to-black 
        p-10 shadow-[0_0_70px_rgba(255,0,0,0.65)]
        overflow-hidden">

        {/* Cinematic Fog Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.15),transparent,black)] opacity-60 animate-pulse" />

        {/* Sword Shine Sweep */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="shine-bar" />
        </div>

        {/* Close Button */}
        {!locked && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white text-xl cursor-pointer"
          >
            ✕
          </button>
        )}

        {/* ============================= */}
        {/* LOGO + HEADER */}
        {/* ============================= */}
        <div className="relative z-10 text-center">
          <h3 className="text-sm tracking-[0.3em] text-gray-400 uppercase">
            GDG Hacker Cup 2026
          </h3>

          <h2 className="mt-2 text-4xl font-extrabold tracking-widest text-red-500 drop-shadow-xl">
            {locked ? "WEAPON LOCKED" : "CHOOSE YOUR WEAPON"}
          </h2>
        </div>

        {/* ============================= */}
        {/* Weapon Display */}
        {/* ============================= */}
        <div className="relative z-10 mt-10 flex flex-col items-center">
          {/* Weapon Icon Circle */}
          <div className="w-28 h-28 flex items-center justify-center rounded-full 
            bg-red-600/20 border border-red-500/40 
            shadow-[0_0_35px_rgba(255,0,0,0.8)]
            animate-float">
            <Icon className="w-14 h-14 text-red-400" />
          </div>

          {/* Weapon Name */}
          <h3 className="mt-6 text-3xl font-bold tracking-wide text-white">
            ⚔ {track.weapon}
          </h3>

          {/* Weapon Description */}
          <p className="mt-3 text-gray-300 text-center max-w-md leading-relaxed">
            {track.details}
          </p>
        </div>

        {/* ============================= */}
        {/* Lock Animation Screen */}
        {/* ============================= */}
        {locked ? (
          <div className="relative z-10 mt-10 text-center">
            {/* Impact Pulse */}
            <div className="mx-auto w-20 h-20 rounded-full bg-red-600/40 blur-2xl animate-ping" />

            <p className="mt-5 text-gray-200 tracking-wide text-lg">
              Loadin Your Weapon...
            </p>

            <p className="text-gray-500 text-sm mt-2">
              Prepare for battle ⚔
            </p>
          </div>
        ) : (
          <button
            onClick={lockWeapon}
            className="relative z-10 mt-10 w-full py-4 rounded-xl 
            bg-red-600 hover:bg-red-700 
            font-extrabold tracking-[0.25em] uppercase
            transition shadow-[0_0_25px_rgba(255,0,0,0.6)]"
          >
            LOCK THIS WEAPON
          </button>
        )}
      </div>

      {/* ============================= */}
      {/* Animations */}
      {/* ============================= */}
      <style>
        {`
        /* Floating weapon effect */
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }

        /* Sword shine sweep */
        .shine-bar {
          position: absolute;
          top: -40%;
          left: -60%;
          width: 60%;
          height: 200%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.15),
            transparent
          );
          transform: rotate(25deg);
          animation: shineSweep 2.8s infinite;
        }

        @keyframes shineSweep {
          0% { left: -80%; }
          100% { left: 140%; }
        }
        `}
      </style>
    </div>
  );
}
