import React from "react";
import footerLogo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#000] font-sans">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <img className="" src={footerLogo} width={250} alt="" />
          <div className="flex flex-col md:flex-row justify-evenly w-full">
            <div className="text-center md:text-left">
              <p className="font-semibold text-white">Quick Links</p>

              <div className="flex flex-col md:items-start items-center mt-5 space-y-2 ">
                <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Home
                </p>
                <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Who We Are
                </p>
                <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Our Philosophy
                </p>
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="font-semibold text-white">Industries</p>

              <div className="flex flex-col md:items-start items-center mt-5 space-y-2">
                <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Retail & E-Commerce
                </p>
                <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Information logy
                </p>
                <p className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Finance & Insurance
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 h-2" />

        <p className="text-white font-sans p-8 text-start md:text-center md:text-lg md:p-4">
          © 2024 Mockli.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
