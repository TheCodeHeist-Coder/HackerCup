import { motion } from "motion/react";
import { CgMail } from "react-icons/cg";
import { memo } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const MEMBERS = [
  {
    name: "Parth Sohaney",
    email: "gdgknit@knit.ac.in",
    linkedin: "https://www.linkedin.com/in/parthsohaney/",
  },
  {
    name: "Ayush Jha",
    email: "gdgknit@knit.ac.in",
    linkedin: "https://www.linkedin.com/in/ayushjha6104/",
  },
  {
    name: "Rajat Yadav",
    email: "gdgknit@knit.ac.in",
    linkedin: "https://www.linkedin.com/in/rajat-yadav-5237721b9/",
  },
  {
    name: "Adeeb Khan",
    email: "gdgknit@knit.ac.in",
    linkedin: "https://www.linkedin.com/in/adeeb001/",
  },
];

const Footer = memo(() => {
  return (
    <footer id="contact" className="relative w-full bg-black text-white overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      {/* Warrior Silhouette */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
        style={{ backgroundImage: "url('/warrior_silhouette.png')" }}
      />

      {/* Fog & Red Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-red-950/60 via-black to-black" />
      <div className="absolute -top-50 left-1/2 w-175 h-175 bg-red-600/20 blur-[200px] -translate-x-1/2" />

      {/* Scanlines */}
      {/* <div className="absolute inset-0 opacity-[0.08] scanlines" /> */}

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.06] noise-bg" />

      {/* ================= CINEMATIC GLITCH HEADER ================= */}


      {/* Divider Slash */}
      <div className="mt-10 w-full h-0.5 bg-linear-to-r from-transparent via-red-600 to-transparent shadow-[0_0_25px_red]" />


      {/* ================= FOOTER CONTENT ================= */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-xl sm:text-4xl font-extrabold tracking-widest font-track text-white"
        >
          Google Developer Group, KNIT |{" "}
          <span className="text-red-500">SULTANPUR</span>
        </motion.h2>

        <p className="text-md opacity-90 leading-relaxed text-center mt-3 font-name tracking-wider">
          "Unleash your creativity, push your limits, and turn bold ideas into real innovation.
          Join brilliant minds and build solutions that shape the future."
        </p>

        {/* Email Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center items-center gap-3 text-gray-300 text-sm sm:text-base"
        >
          <FaEnvelope className="text-red-500 glow-icon" />
          <span className="font-semibold tracking-widest font-name text-gray-200">
            gdgknit@knit.ac.in
          </span>
        </motion.div>

        {/* ================= SOCIAL ICONS ================= */}
        <div className="flex justify-center gap-6 mt-12">
          <SocialIcon icon={<FaInstagram />} link="https://www.instagram.com/gdgoncampusknitsul/" />
          <SocialIcon icon={<FaLinkedin />} link="https://www.linkedin.com/company/gdg-on-campus-kamla-nehru-institute-of-technology/posts/?feedView=all" />
          <SocialIcon icon={<FaTwitter />} link="https://x.com/gdgoncampusknit" />
        </div>

        {/* ================= MEMBERS ================= */}
        <div className="mt-20 grid sm:grid-cols-3 gap-10">
          {MEMBERS.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.9 }}
              viewport={{ once: true }}
              className="terminal-card"
            >
              <h3 className="text-xl font-bold font-name tracking-widest text-red-400">
                {m.name}
              </h3>

              <p className="flex items-center gap-2 mt-4 text-gray-200 text-sm">
                <CgMail className="text-red-500 glow-icon" />
                {m.email}
              </p>

              <a
                href={m.linkedin}
                target="_blank"
                className="flex items-center gap-2 mt-4 text-gray-300 text-sm hover:text-red-400 transition"
              >
                <FaLinkedin className="text-red-500 glow-icon font-name tracking-wider" />
                Connect on LinkedIn
              </a>

              {/* Slash Divider */}
              <div className="mt-8 slash-divider" />
            </motion.div>
          ))}
        </div>

        {/* ================= FINAL ENDING LINE ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center text-gray-300 text-xs tracking-[0.4em]"
        >
          © 2026 GDG KNIT Sultanpur - All Rights Reserved | Made With ❤ by GDG On Campus KNIT
        </motion.div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        /* Scanlines */
        .scanlines {
          background: repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.05),
            rgba(255,255,255,0.05) 1px,
            transparent 2px,
            transparent 6px
          );
        }

        /* Noise Texture */
        .noise-bg {
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
        }

        /* Glow Icon */
        .glow-icon {
          filter: drop-shadow(0 0 10px rgba(255,0,0,0.8));
        }

        /* Terminal Cards */
        .terminal-card {
          padding: 26px;
          border-radius: 22px;
          border: 1px solid rgba(255,0,0,0.35);
          background: rgba(60,0,0,0.15);
          box-shadow: 0 0 50px rgba(255,0,0,0.12);
          transition: 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        /* Hover Cinematic */
        .terminal-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 0 90px rgba(255,0,0,0.35);
        }

        /* Slash Divider */
        .slash-divider {
          width: 100%;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255,0,0,0.8),
            transparent
          );
          transform: skewX(-20deg);
          box-shadow: 0 0 25px rgba(255,0,0,0.7);
        }

        /* Social Button */
        .social-btn {
          width: 60px;
          height: 60px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,0,0,0.45);
          background: rgba(255,0,0,0.08);
          box-shadow: 0 0 30px rgba(255,0,0,0.25);
          transition: 0.35s ease;
        }

        .social-btn:hover {
          transform: scale(1.18) rotate(-3deg);
          box-shadow: 0 0 70px rgba(255,0,0,0.7);
        }

        /* Glitch Keyframes */
        @keyframes glitch1 {
          0% { clip: rect(0, 9999px, 0, 0); transform: translate(-2px, -2px); }
          20% { clip: rect(10px, 9999px, 50px, 0); transform: translate(2px, 2px); }
          40% { clip: rect(20px, 9999px, 70px, 0); transform: translate(-1px, 1px); }
          60% { clip: rect(30px, 9999px, 90px, 0); transform: translate(1px, -1px); }
          80% { clip: rect(5px, 9999px, 60px, 0); transform: translate(-2px, 0); }
          100% { clip: rect(0, 9999px, 0, 0); transform: translate(0, 0); }
        }

        .glitch-text {
          position: relative;
          color: red;
          font-weight: 900;
          font-size: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          animation: glitch1 1s infinite linear alternate-reverse;
          text-shadow: 0 0 15px red, 0 0 35px darkred;
        }
      `}</style>
    </footer>
  );
});

export default Footer;

/* ================= SOCIAL ICON ================= */
const SocialIcon = memo(function SocialIcon({ icon, link }) {
  return (
    <a href={link} target="_blank" className="social-btn">
      {icon}
    </a>
  );
});

/* ================= GLITCH TEXT ================= */
const GlitchText = memo(function GlitchText({ text }) {
  return <div className="glitch-text">{text}</div>;
});
