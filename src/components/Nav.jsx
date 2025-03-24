import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center gap-8 p-4 bg-[#001233]/50 backdrop-blur-sm">
      <Link
        to="#projects"
        className="text-gray-400  font-semibold px-4 py-2 rounded  hover:text-white transition-colors"
      >
        Projects
      </Link>
      <Link
        to="#tech-stack"
        className="text-gray-400 font-semibold px-4 py-2 rounded  hover:text-white transition-colors"
      >
        Tech Stack
      </Link>
      <Link
        to="#contact"
        className="text-gray-400 font-semibold px-4 py-2 rounded hover:text-white transition-colors"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
