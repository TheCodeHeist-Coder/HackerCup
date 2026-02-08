

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaScroll, FaSkullCrossbones } from "react-icons/fa";

export default function RulesPage() {






  const rules = [
    "Team Formation: Participants can form teams of 2 to 4 members.",
        "Group leader need to fill the online registration form and fill the details of all members.",
        "Registration fee is non refundable",
        "We encourage multidisciplinary participations",
        "Student can participate only in team",
        "At least one member must be present on the allocated area",
        "All work must be created during the hackathon.",
        "Teams have to present their solution in the form of a prototype",
        "Projects must align with the given hackathon themes or challenges.",
        "All projects must be submitted by the designated deadline, including project description, code, and Presentation",
        "Project Scope: Teams can work on any project within the given theme. The scope can be limited to a specific technology or platform based on the event's guidelines.",
        "Time Limit: The Hackathon will have a specific time limit.",
        "The use of pre-existing code or projects is not allowed, except for open-source libraries or frameworks.",
        "Code Ownership: All code developed during the Hackathon should be the original work of the team. Participants cannot use code or assets created by someone else without proper permissions or licenses.",
        "Collaboration: Teams are encouraged to collaborate and seek help from mentors or organizers, but cross-team collaboration is not allowed during the competition.",
        "Presentation: Each team will have to present their project to the judging panel. The presentation should demonstrate the functionality and features of the project, as well as any unique or innovative aspects.",
        "Judging Criteria: The judging criteria for the Hackathon will be clearly communicated to the participants before the event. The result by the judge will be final. It may include aspects such as innovation, technical implementation, user experience, scalability, and relevance to the theme.",
        "Fair Play: Participants must adhere to ethical standards and abide by the rules and regulations set by the organizers. Any form of cheating, plagiarism, or unfair practices will result in immediate disqualification.",
        "Intellectual Property: Participants retain full ownership of the intellectual property rights to their projects. However, organizers may request participants to share their code or project details for promotional or showcase purposes.",
        "Code Submission: Teams must submit their code and project documentation before the specified deadline. Late submissions may result in penalties or disqualification.",
        "Code Validation: Organizers may conduct code validation to ensure that the project was developed within the given time frame and complies with the rules and regulations.",
        "Code Sharing: Participants are encouraged to share their code and projects with the wider community after the Hackathon. Open sourcing or publishing the code on platforms like GitHub is often appreciated.",
        "Code of Conduct: Participants should adhere to a code of conduct that promotes inclusivity, respect, and professionalism. Any form of harassment, discrimination, or inappropriate behaviour will not be tolerated.",
        "Prizes and Awards: The Hackathon will offer prizes or awards to winning teams based on the judging criteria.",
        "Disputes and Arbitration: In case of any disputes or concerns, the decision of the organizers and judging panel will be final. Any disagreements or issues should be resolved through an arbitration process outlined by the organizers.",
        "Liability: The organizers and sponsors of the Hackathon hold no liability for any damages, losses, or injuries incurred during the event. Participants are responsible for their own safety, equipment, and actions.",
        "Changes to the Rules: Organizers reserve the right to make changes to the Hackathon rules, format, or prizes at any time. Any modifications will be communicated to the participants in a clear and timely manner.",
        "There will be no TA/DA for the participants to attend hackathon.",
  ];



  const sectionRef = useRef(null);
  const [showEffects, setShowEffects] = useState(false);

  // 🎉 Trigger confetti sparks on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowEffects(true);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);




  return (
    <div ref={sectionRef} id="rules" className="relative min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-linear-to-b from-red-950/50 via-black to-black opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.18),transparent,black)]" />


      {showEffects && <ConfettiSparks />}

      <div className="scanlines" />

      <div className="glitch-overlay" />


      <div className="relative max-w-6xl mx-auto px-6 py-12 z-10">

        <motion.div
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="
              text-3xl sm:text-5xl md:text-7xl
              font-extrabold tracking-widest
              text-red-600 glowUp font-display 
            "> RULES  </h1>

          <p className="font-track md:pb-8 pt-3 tracking-widest font-extrabold md:text-4xl  text-[red]">
            Warrior Code of Conduct
          </p>

          <div >

          </div>

          <div className="w-full md:mt-12 mt-3 h-96 flex items-center justify-center">
            <img
            loading="lazy"
              src="/finalRules03.png"
              draggable='false'
              alt="Rules Warrior"
              className="
       md:w-2/3 md:h-138 h-100

      /* Cinematic Fade Mask */
      mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
      mask-size-[100%_100%]
      mask-no-repeat

      /* For Safari Support */
      [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
      [-webkit-mask-size:100%_100%]
      [-webkit-mask-repeat:no-repeat]
    "
            />
          </div>




          {/* <div className="terminal-divider mx-auto mt-8" /> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="mission-terminal">
            {/* Terminal Top Bar */}
            <div className="terminal-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />

              <p className="tracking-widest text-gray-300 font-track">
                GDG HACKER CUP 2026
              </p>
            </div>

            {/* Scroll Rules */}
            <div className="terminal-scroll">
              <div className="grid sm:grid-cols-2 gap-7 pr-2">
                {rules.map((rule, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -90 : 90,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                    viewport={{ once: true }}
                    className="directive-card"
                  >
                    <div className="flex gap-4">
                      <div className="directive-icon">
                        <FaScroll />
                      </div>

                      <div>
                        <h3 className="directive-title font-track tracking-widest">
                          DIRECTIVE {index + 1}
                        </h3>

                        <p className="directive-text font-name tracking-wider text-md font-semibold">{rule}</p>
                      </div>
                    </div>

                    <div className="directive-divider mt-5" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="final-warning-title font-track">
            <FaSkullCrossbones className="inline mr-3 text-red-500" />
            FINAL COMMAND
          </h2>

          <p className="final-warning-text font-name tracking-wider font-semibold">
            There will be three ( <span className="text-red-500 font-bold">First, Second and Third</span> ) prizes. Decision of the evaluation panel members based on the performance of the team will be final.
           
          </p>
        </motion.div>
      </div>


      <style>{`
       
       

        .terminal-subtitle {
          margin-top: 18px;
          color: rgba(255,255,255,0.75);
          font-size: 1.1rem;
          letter-spacing: 0.2em;
        }

        .terminal-divider {
          width: 280px;
          height: 3px;
          background: linear-gradient(to right, transparent, red, transparent);
          box-shadow: 0 0 25px red;
        }

        
        .mission-terminal {
          border-radius: 26px;
          border: 1px solid rgba(255,0,0,0.5);
          background: rgba(15,0,0,0.55);
          box-shadow: 0 0 120px rgba(255,0,0,0.25);
          overflow: hidden;
          backdrop-filter: blur(18px);
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

        /* Top Bar */
        .terminal-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          background: rgba(255,0,0,0.12);
          border-bottom: 1px solid rgba(255,0,0,0.35);
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .dot.red { background: red; }
        .dot.yellow { background: orange; }
        .dot.green { background: lime; }

        .terminal-label {
          margin-left: 12px;
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.7);
        }

        /* Scroll */
        .terminal-scroll {
          max-height: 520px;
          overflow-y: auto;
          padding: 26px;
        }

        /* Directive Cards */
        .directive-card {
          padding: 18px;
          border-radius: 20px;
          background: rgba(255,0,0,0.05);
          border: 1px solid rgba(255,0,0,0.25);
          transition: 0.35s ease;
        }

        .directive-card:hover {
          transform: scale(1.04);
          box-shadow: 0 0 55px rgba(255,0,0,0.35);
        }

        .directive-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255,0,0,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: red;
          font-size: 20px;
          box-shadow: 0 0 25px rgba(255,0,0,0.6);
        }

        .directive-title {
          font-weight: 800;
          color: rgba(255,70,70,0.95);
          letter-spacing: 0.2em;
        }

        .directive-text {
          margin-top: 6px;
          color: rgba(255,255,255,0.78);
          line-height: 1.5;
        }

        .directive-divider {
          height: 1px;
          width: 100%;
          background: linear-gradient(to right, transparent, rgba(255,0,0,0.7), transparent);
        }

        /* Final Warning */
        .final-warning-title {
          font-size: 2rem;
          font-weight: 900;
          color: red;
          letter-spacing: 0.2em;
          text-shadow: 0 0 35px rgba(255,0,0,0.8);
        }

        .final-warning-text {
          margin-top: 18px;
          max-width: 750px;
          margin-inline: auto;
          color: rgba(255,255,255,0.75);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        /* ================= SCANLINES ================= */
        .scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.02),
            rgba(255,255,255,0.02) 2px,
            transparent 3px,
            transparent 6px
          );
          pointer-events: none;
          opacity: 0.12;
        }

        /* Glitch Overlay */
        .glitch-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(255,0,0,0.08), transparent 70%);
          mix-blend-mode: screen;
          animation: glitchPulse 4s infinite alternate;
          pointer-events: none;
        }

        @keyframes glitchPulse {
          from { opacity: 0.15; }
          to { opacity: 0.35; }
        }

        /* Scrollbar */
        .terminal-scroll::-webkit-scrollbar {
          width: 7px;
        }
        .terminal-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,0,0,0.75);
          border-radius: 10px;
          box-shadow: 0 0 25px red;
        }
      `}</style>
    </div>
  );
}



function ConfettiSparks() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="spark"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 20}%`,
            animationDelay: `${Math.random() * 1.2}s`,
          }}
        />
      ))}
    </>
  );
}