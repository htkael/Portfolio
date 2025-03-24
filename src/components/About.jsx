const About = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-20 md:py-24 flex flex-col items-center">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
        About <span className="text-blue-500">me</span>
      </h2>
      <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-4xl text-center">
        I'm a self-taught developer who transitioned from criminal justice to
        web development, bringing unique analytical skills and fresh
        perspectives to every project I build. I'm passionate about creating
        <span className="text-white">
          {" "}
          intuitive, efficient web experiences
        </span>{" "}
        and thrive on solving
        <span className="text-blue-500"> complex problems</span> through code.
        <br />
        <br />
        When I'm not programming, you'll find me teaching tennis, scaling rock
        climbing routes, or hanging out with my fiancée Bean and our dog Willow
        at local dog parks. My journey proves that with
        <span className="text-blue-500"> dedication and persistence</span>,
        career pivots can lead to exciting new skills and opportunities.
        <br />
        <br />
        Looking for a developer with both{" "}
        <span className="text-white">technical abilities</span> and
        <span className="text-white"> diverse real-world experience</span>?
        Let's connect and build something amazing together!
      </p>
    </div>
  );
};

export default About;
