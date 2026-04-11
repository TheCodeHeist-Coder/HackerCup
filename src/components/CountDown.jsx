
import { div } from "motion/react-client";
import { useEffect, useState, useRef, memo } from "react";

export default function Countdown() {
  const targetDate = new Date("April 12, 2026 8:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const rafIdRef = useRef(null);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    const updateCountdown = (timestamp) => {
      // Throttle updates to once per second using RAF
      if (timestamp - lastUpdateRef.current >= 1000) {
        const now = Date.now();
        const difference = targetDate - now;

        if (difference <= 0) {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          return;
        }

        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });

        lastUpdateRef.current = timestamp;
      }

      rafIdRef.current = requestAnimationFrame(updateCountdown);
    };

    rafIdRef.current = requestAnimationFrame(updateCountdown);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [targetDate]);


  if (timeLeft.days == 0 && timeLeft.hours == 0 && timeLeft.minutes == 0 && timeLeft.seconds == 0) {

    return (
      <div className="text-gray-50 sm:py-20   flex flex-col gap-12 items-center justify-center"> 
       <h1
            className="font-display tracking-widest font-extrabold py-3
          text-2xl sm:text-3xl md:text-6xl bg-clip-text text-transparent bg-linear-to-b from-red-500 to-red-800/50 text-center"
          >
            Hacking Has Been Started...
          </h1>
          <p className=" text-2xl sm:text-6xl font-bold font-track tracking-wider">  All the Best, Guys!  </p>
      </div>
    )

  } else {
    return (
      <div className="flex flex-col gap-15 items-center justify-center text-center w-full">
      
       <h1
            className="font-display tracking-widest font-medium 
          text-2xl sm:text-3xl md:text-5xl text-gray-100 text-center"
          >
            HACK STARTS IN
          </h1>


        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12">
          <TimeBox label="Days" value={timeLeft.days} />
          <TimeBox label="Hours" value={timeLeft.hours} />
          <TimeBox label="Minutes" value={timeLeft.minutes} />
          <TimeBox label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    );
  }


}

const TimeBox = memo(function TimeBox({ label, value }) {
  return (
    <div className="relative">
      <div className="absolute animate-pulse -inset-1 bg-red-600 rounded-2xl blur-xl opacity-40 motion-safe:animate-pulse motion-reduce:animate-none"></div>
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
});

