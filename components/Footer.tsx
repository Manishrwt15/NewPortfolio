import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-0 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s <span className="text-purple">collaborate</span> and build something amazing!
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Have a project idea? Let&apos;s connect and bring it to life.
        </p>
        <a href="mailto:manishrwat15@gmail.com">
          <MagicButton
            title="Let's Connect"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4 md:gap-0 w-full">
        {/* Copyright */}
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Manish Rawat
        </p>

        {/* Social Media Icons */}
         <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a key={info.id} href={info.link} target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
