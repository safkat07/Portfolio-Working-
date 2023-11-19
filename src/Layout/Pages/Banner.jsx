// import { FaDesktop } from "react-icons/fa";
import { FaLinkedin  } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import myimg from "../../assets/my.jpg";

const Banner = () => {
  return (
    <div className="mt-40 mx-auto max-w-2xl">
      <div className="flex gap-10 justify-between  items-center">
        <div className="  text-left">
          <p className="font-bold text-5xl">Front-End React Developer</p>
          <p className="mt-4">
            Hi, I'm Safkat Sharif Sadli. A Passionate Front-end React Developer based
            in Dhaka, Bangladesh.
          </p>
          <div className="flex gap-2 my-5 text-2xl">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/safkat-sadli-8327aa252/"><FaLinkedin></FaLinkedin></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/safkat07"><FaGithub></FaGithub></a>
          </div>
        </div>
        <div className=" w-1/2 ">
          <img
            className=" shadow-xl w-full rounded-2xl shadow-blue-400"
            src={myimg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
