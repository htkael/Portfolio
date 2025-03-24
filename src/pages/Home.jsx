import ParticlesComponent from "../components/ParticlesComponent";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import About from "../components/About";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen ">
      <div className="fixed inset-0 z-0">
        <ParticlesComponent id="particles" />
      </div>

      <div className="relative z-10 w-full ">
        <Nav />
        <Intro />
        <About />
      </div>
    </div>
  );
};

export default Home;
