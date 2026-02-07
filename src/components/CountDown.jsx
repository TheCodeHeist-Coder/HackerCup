
import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("March 17, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center w-full">

      <div
        className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12"
      >
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="relative">

      <div className="absolute animate-pulse -inset-1 bg-red-600 rounded-2xl blur-xl opacity-40"></div>
      <div
        className="
          relative bg-black border border-red-500 rounded-2xl
          px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6
          shadow-lg shadow-red-500/30
          hover:scale-105 transition-all duration-300
          min-w-20 sm:min-w-27.5 md:min-w-32.5
        "
      >
        <p
          className="
            text-2xl sm:text-4xl md:text-5xl font-extrabold
            bg-clip-text text-transparent
            bg-linear-to-b from-red-500 to-red-300
          "
        >
          {String(value).padStart(2, "0")}
        </p>

        <span
          className="
            text-[10px] sm:text-sm uppercase tracking-widest
            text-red-400 block mt-1
          "
        >
          {label}
        </span>
      </div>
    </div>
  );
}

