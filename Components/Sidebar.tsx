import { AiFillFilePdf } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedinIn, FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div>
        <Image
          src="/team/138/b8983c92771.577242aee9382.jpg"
          width="100px"
          height="100px"
          className="border-4 border-purple-700 border-solid rounded-full"
        />
        <h1 className="text-3xl font-bold tracking-wider text-gray-700 font-Kaushan">
          <span className="text-purple-600">Shaheb</span> Ali
        </h1>
        <div className="grid grid-cols-1">
          <p className="py-2 tracking-wider text-gray-400">
            Frontend Developer
          </p>
          <a
            href="https://drive.google.com/file/d/17MBfSelKhQcmmE6wZgSvVdUxh5Cs5U6J/view?usp=sharing"
            download="CV_of_Md_Shaheb_Ali.jpg"
            target="_blank"
            className="flex items-center justify-center px-2 py-2 text-center text-purple-300 transition-all bg-purple-600 rounded-full hover:font-bold hover:text-white"
          >
            <AiFillFilePdf className="text-3xl" />
            <span className="hover:font-bold">Downlonad Resume</span>
          </a>
        </div>
        <div className="grid items-center justify-center grid-cols-6 py-5 text-center">
          <a href="https://www.youtube.com/channel/UCAr7KlIrRt63_QbF73W98fw/videos" target="_blank" className="flex justify-center text-3xl text-red-700 transition-all cursor-pointer hover:text-purple-600">
            <FaYoutube />
          </a>
          <a href="https://www.facebook.com/shaheb.ali.nadim/" target="_blank" className="flex justify-center text-3xl text-blue-800 transition-all cursor-pointer hover:text-purple-600">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/md_shaheb_ali" target="_blank" className="flex justify-center text-3xl text-blue-500 transition-all cursor-pointer hover:text-purple-600">
            <FaTwitter />
          </a>
          <a href="https://github.com/systembugbd" target="_blank" className="flex justify-center text-3xl text-gray-600 transition-all cursor-pointer hover:text-purple-600">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/md-shaheb-ali-wwwdon/" target="_blank" className="flex justify-center text-3xl text-blue-900 transition-all cursor-pointer hover:text-purple-600">
            <FaLinkedinIn />
          </a>
          <a href="https://medium.com/@wwwdonus" target="_blank" className="flex justify-center text-3xl transition-all cursor-pointer hover:text-purple-600">
            <FaMedium />
          </a>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
