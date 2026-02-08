import { motion, AnimatePresence } from "motion/react";
import { memo, useState, useCallback, useMemo } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getOptimalSparkCount, generateSparkPositions } from '../utils/performance';

const faqData = [
  {
    question: "What is GDG HACKER CUP Hackathon?",
    answer:
      "It is a inter college hackathon hosted by Kamla Nehru Institute Of Technology,Sultanpur. Its final round will be held on 17nd March, 2026 at KNIT, Sultanpur Campus.",
  },
  {
    question: "Who all are eligible to participate?",
    answer: "Any student pursuing a college degree can participate.",
  },
  {
    question: "It is my first hackathon, what's something I should know?",
    answer:
      "Don’t worry! Hackathons are about learning and teamwork. Bring your curiosity and enthusiasm, mentors and peers will guide you throughout.",
  },
  {
    question: "What is the Round 1?",
    answer:
      "Round 1 is the PPT submission round where participants present their ideas to get shortlisted for the final round.",
  },
  {
    question: "Where and how do I submit my PPT for Round 1?",
    answer:
      "You can submit your PPT through the Unstop registration page till 28 Feb, 2026.",
  },
  {
    question: "Where is it being held?",
    answer:
      "The first round will be hosted online on Unstop and the second or the final round will be hosted at the Kamla Nehru Institute Of Technology, Sultanpur campus. Further details will be shared with shortlisted teams.",
  },
  {
    question: "Can we participate individually?",
    answer:
      "No, the team size should be 2-4 members to enhance learning and collaboration.",
  },
  {
    question: "Will there be food arrangements and accommodation?",
    answer:
      "Yes, meals and accommodation will be provided to all registered participants during the event with a minimal payment.",
  },
];

const FaqPage = memo(() => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = useCallback((index) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  return (
    <div id="faqs" className="relative w-full min-h-screen bg-black text-white overflow-hidden py-24 px-6">

      <FloatingEmbers />


      <div className="relative max-w-5xl mx-auto text-center mb-16 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
              text-3xl sm:text-5xl md:text-7xl
              font-extrabold tracking-widest
              text-red-600 glowUp font-display mb-6"
        >
          FAQ TERMINAL
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-track tracking-widest font-extrabold md:text-4xl  text-[red]"
        >
          Warriors , seek answers before entering the battlefield
        </motion.p>


        <div className="mt-10 w-70 h-0.75 mx-auto bg-linear-to-r from-transparent via-red-500 to-transparent shadow-[0_0_25px_red]" />
      </div>

      <div className="relative max-w-4xl mx-auto flex flex-col gap-6 z-10">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`faq-card ${openIndex === index ? "faq-active" : ""
              }`}

          >

            <button
              onClick={() => toggleFaq(index)}
              className="w-full cursor-pointer flex justify-between items-center text-left"
            >
              <h2 className="text-lg sm:text-xl font-bold text-red-400 tracking-wide font-name">
                {faq.question}
              </h2>

              <FaChevronDown
                className={`text-red-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </button>


            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{
                    opacity: 0,
                    height: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="mt-4 text-gray-200 font-name tracking-wider font-normal leading-relaxed text-sm sm:text-base"
                  >
                    {faq.answer}
                  </motion.p>

                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="mt-6 slash-divider"
                  />
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        ))}
      </div>


      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative text-center mt-20 z-10"
      >
        <h3 className="text-xl sm:text-2xl font-display font-extrabold text-red-500 tracking-widest drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]">
          STILL HAVE QUESTIONS?
        </h3>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto font-track tracking-wider font-bold">
          Reach out to the organizers — every warrior deserves clarity before
          battle.
        </p>
      </motion.div>

      <style>{`


.faq-active {
  border: 1px solid rgba(255, 0, 0, 0.7);
  box-shadow: 0 0 90px rgba(255, 0, 0, 0.45);
  transform: scale(1.02);
  animation: pulseOpen 0.6s ease;
}

@keyframes pulseOpen {
  0% {
    transform: scale(0.97);
    opacity: 0.6;
  }
  60% {
    transform: scale(1.03);
    opacity: 1;
  }
  100% {
    transform: scale(1.02);
  }
}

.faq-active {
  animation: pulseOpen 0.6s ease, shakeEnergy 0.35s ease;
}

@keyframes shakeEnergy {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(3px);
  }
  75% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(0);
  }
}


        .faq-card {
          padding: 22px;
          border-radius: 22px;
          border: 1px solid rgba(255, 0, 0, 0.3);
          background: rgba(80, 0, 0, 0.12);
          box-shadow: 0 0 35px rgba(255, 0, 0, 0.15);
          transition: 0.35s ease;
        }

        .faq-card:hover {
          transform: scale(1.02);
          box-shadow: 0 0 65px rgba(255, 0, 0, 0.35);
        }

        .slash-divider {
          width: 100%;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 0, 0, 0.7),
            transparent
          );
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.6);
          transform: skewX(-20deg);
        }

        /* Floating Embers */
        .ember {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: red;
          opacity: 0.7;
          animation: floatUp 4s linear infinite;
        }

        @keyframes floatUp {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-700px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
});

export default FaqPage;

const FloatingEmbers = memo(() => {
  const emberCount = useMemo(() => Math.min(getOptimalSparkCount(), 15), []);
  const embers = useMemo(() => generateSparkPositions(emberCount, { useBottom: true, animationDelayMax: 3 }), [emberCount]);

  return (
    <>
      {embers.map((ember) => (
        <span
          key={ember.key}
          className="ember"
          style={{
            left: ember.left,
            bottom: ember.bottom,
            animationDelay: ember.animationDelay,
          }}
        />
      ))}
    </>
  );
});
