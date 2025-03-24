import codingGraphic from "../assets/coding.svg";
import { Github, Linkedin, FileUser } from "lucide-react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-8 py-20 md:py-32 gap-10">
      {/* Text content */}
      <div className="flex flex-col space-y-6">
        <h3 className="text-gray-400 text-2xl md:text-3xl font-medium m-0 mb-2">
          Hi there
        </h3>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white m-0">
          I'm <span className="text-blue-500">Hunter</span>
        </h1>
        <h2 className="text-gray-400 text-4xl md:text-5xl font-medium mt-4">
          I am a <span className="text-white">Full Stack Developer</span>
        </h2>

        {/* Social links */}
        <div className="flex items-center space-x-8 mt-8">
          <Link
            to="https://github.com/htkael"
            aria-label="Github"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github size={32} strokeWidth={1} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/hunter-kael/"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Linkedin size={32} strokeWidth={1} />
          </Link>
          <a
            href="/HUNTERKAEL.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FileUser size={32} strokeWidth={1} />
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="w-full max-w-lg md:max-w-md lg:max-w-xl">
        <img
          src={codingGraphic}
          alt="coding-graphic"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Intro;
