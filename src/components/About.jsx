import { useEffect, useRef, useState } from "react";

const About = () => {




       const [showFinalBlast, setShowFinalBlast] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowFinalBlast(true), 2000);
        return () => clearTimeout(timer);
    }, []);

 
   
  return (
    <div
      id="about"
      className="relative overflow-hidden  w-full min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-12"
    >
       <div className="absolute inset-0 bg-linear-to-b from-red-950/50 via-black to-red-950/80 opacity-40" />
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.18),transparent,black)]" /> */}
 
            <FloatingSparks />

      <div className="max-w-337.5 mx-auto ">

        <div className="flex justify-center text-center ">
          <h1 className=" mb-12 font-display text-3xl sm:text-4xl md:text-7xl font-extrabold  tracking-wide sm:tracking-wider md:tracking-widest text-red-600 glowUp">
            ABOUT HACKER CUP
          </h1>
        </div>

        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">

        
     

          {/* Right Info Section */}
          <div className="w-full lg:max-w-150 text-center lg:text-left">

            <h2 className="text-base sm:text-lg md:text-xl text-gray-100 tracking-widest leading-relaxed">
              <span className="text-red-600 font-bold">
                GDG KNIT | SULTANPUR
              </span>{" "}
              invites students from across the nation to participate in{" "}
              <span className="text-red-600 font-bold">
                HACKER CUP - 2026
              </span>
              , a 24-hour hackathon centered on our ethos:
            </h2>

            
            <div className="relative mt-10 bg-linear-to-r from-red-600/30 via-red-500/20 to-transparent backdrop-blur-2xl rounded-xl py-6 px-4 flex justify-center lg:justify-start">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-500 font-display">
                Connect <span className="text-gray-400">/</span> Create{" "}
                <span className="text-gray-400">/</span> Collaborate
              </h1>

              <div className="absolute inset-y-0 left-0 w-1.5 bg-red-600 rounded-full"></div>

            </div>

            <p className="mt-8 text-gray-300 text-sm sm:text-base md:text-lg tracking-widest leading-relaxed">
              This event is designed for students who are passionate about
              applying their coding and problem-solving skills to address
              significant real-world problems. Participants will select from
              given{" "}
              <span className="text-red-600 font-bold">
                problem themes + 1 Open Innovation
              </span>
              , pushing boundaries of innovation.
            </p>

            <div className="mt-8 bg-linear-to-r from-red-600/50 to-transparent rounded-xl py-6 px-4">
              <h1 className="text-base sm:text-lg text-gray-200 tracking-widest font-semibold leading-relaxed">
                Teams will develop and present a functional prototype within the
                hackathon time limit.
              </h1>
            </div>
          </div>


                 <div className="w-full sm:w-105">
            <h1 className="text-2xl font-track sm:text-3xl font-bold tracking-wider bg-clip-text text-transparent bg-linear-to-b from-red-600 to-red-400 mb-6 text-center lg:text-left">
              Visit Our Campus
            </h1>


           <div className="relative w-full overflow-hidden rounded-2xl shadow-lg shadow-red-500/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4476.112621721465!2d82.07974147613429!3d26.288786686623652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7c86d691219f%3A0x99a3eb1e7c07f78f!2sKamla%20Nehru%20Institute%20of%20Technology%2C%20Sultanpur%20(U.P.)!5e1!3m2!1sen!2sin!4v1770460199094!5m2!1sen!2sin" 
              className="w-full h-72 sm:h-80 md:h-96 border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>


            
            <div className="flex justify-center mt-6">
              <a
                href="https://www.google.com/maps/place/Kamla+Nehru+Institute+of+Technology,+Sultanpur+(U.P.)/"
                target="_blank"
                className="border-2 border-red-600 px-8 sm:px-12 py-3 text-gray-200 rounded-full text-base sm:text-lg font-semibold hover:bg-red-600 hover:text-white transition duration-300"
              >
                📍 Open In Maps
              </a>
            </div>
          </div>




        </div>

        <div className="mt-24 w-full border border-red-600 backdrop-blur-3xl rounded-2xl py-12 px-6 text-center">

          <h1 className="font-display text-xl sm:text-2xl font-semibold text-red-600 tracking-widest">
            Organized By
          </h1>

          <h2 className="mt-8 text-3xl sm:text-4xl font-track md:text-5xl font-semibold text-gray-200 tracking-widest">
            Google Developers Group
          </h2>

          <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-red-500 tracking-widest">
            Kamla Nehru Institute of Technology | Sultanpur
          </h3>

          <p className="mt-6 text-sm sm:text-base text-gray-400 leading-relaxed">
            <span className="text-gray-200 font-semibold">Address:</span>{" "}
            Sultanpur - Kadipur Rd, Sultanpur, Ratan Pur, Uttar Pradesh 228118
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;




function FloatingSparks() {
    return (
        <>
            {Array.from({ length: 30 }).map((_, i) => (
                <span
                    key={i}
                    className="spark"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 200}%`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}
        </>
    );
}
