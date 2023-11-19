import aboutimg from "../../assets/about1.jpg";

const About = () => {
  return (
    <div
      className="max-w-3xl mx-auto  my-96
        "
    >
      <div className="flex gap-10     ">
        <div className="w-1/2">
          <img className="w-96 rounded-md" src={aboutimg} alt="" />
        </div>
        <div className="w-1/2">
          <p className="text-purple-700 mb-1 font-semibold underline">About Me</p>
          <p className="font-bold mb-4 text-xl">
            A Dedicated Front-end Developer <br /> Based In Dhaka, Bangladesh
          </p>
          <p>
            Greetings! I'm Safkat Sharif, a junior frontend developer embarking on
            an exciting journey in the ever-evolving world of web development.
            As a passionate advocate for clean and user-centric design, I am
            committed to learning and growing in the dynamic field of frontend
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
