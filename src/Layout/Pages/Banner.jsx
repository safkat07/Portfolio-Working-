// import { FaDesktop } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaFacebook } from "react-icons/fa";
import myimg from "../../assets/my.jpg";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import mongodb from "../../assets/mongodb.png";
import js from "../../assets/js.png";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";

const Banner = () => {
  return (
    <div>
      <div className="my-40 mx-auto max-w-3xl">
        <div className="flex gap-10 justify-between  items-center">
          <div className="  text-left">
            <p className="font-bold text-5xl">MERN-STACK Developer</p>
            <p className="mt-4">
              Hi, I'm Safkat Sharif Sadli. A Passionate MERN-Stack
              Developer based in Dhaka, Bangladesh.
            </p>
            <div className="flex gap-2 my-5 text-2xl">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/safkat-sadli-8327aa252/"
              >
                <FaLinkedin></FaLinkedin>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/safkat07"
              >
                <FaGithub></FaGithub>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=61552488721943"
              >
                <FaFacebook></FaFacebook>
              </a>
            </div>
            <div className="mt-10 text-left">
        <div className="flex gap-5">
          <div className="font-semibold text-xl">Tech Stack |</div>
          <div className="flex gap-5">
            <img className="w-6 rounded-md" src={html} alt="" />
            <img className="w-6 rounded-md " src={css} alt="" />
            <img className="w-6 rounded-md" src={js} alt="" />
            <img className="w-6 rounded-md" src={tailwind} alt="" />
            <img className="w-6 rounded-md" src={react} alt="" />
            <img className="w-6 rounded-md" src={mongodb} alt="" />
          </div>
        </div>
      </div>
          </div>
          <div className=" w-1/2 ">
            <img
              className=" shadow-xl w-full   rounded-2xl shadow-blue-400"
              src={myimg}
              alt="img"
            />
          </div>
          
        </div>
       
      </div>
      
    </div>
  );
};

export default Banner;
