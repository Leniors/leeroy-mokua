"use client";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex justify-around items-center gap-4 text-sm text-neutral-400">
        {/* Branding */}
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Leeroy Mokua</p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Leniors"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          {/* <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a> */}
          <a
            href="mailto:leeroynyanchwa@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
