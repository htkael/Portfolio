import ParticlesComponent from "../components/ParticlesComponent";
import Nav from "../components/Nav";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticlesComponent id="particles" />
      </div>

      <div className="relative z-10 w-full h-full">
        <Nav />
        <Intro />
      </div>
    </div>
  );
};

export default Home;
