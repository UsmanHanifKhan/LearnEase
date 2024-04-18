import React from "react";
import logos from "../../assets/images/logo.png";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const gotologin = (()=>{
    navigate("/login")
  })
  const gotoSignup = (()=>{
    navigate("/signup")
  })
  
  return (
    <>
      <div className="containers">
        <nav className="fixed top-0 z-10 bg-opacity-50 bg-slate-100  flex flex-col sm:flex-row items-center justify-between px-6 py-4 w-full">
          {/* Logo */}
          <img
            src={logos}
            alt="Logo"
            onClick={()=> navigate('/')}
            style={{cursor:'pointer'}}
            className="h-32 sm:h-15 md:h-20 lg:h-14 mb-4 sm:mb-0"
 />
         

          {/* Signup/Login Buttons */}
          <div className="flex items-center space-x-4">
            <button
             onClick={gotologin}
             className="text-PrimaryColor border-PrimaryColor border px-3 py-1 rounded-md md:px-4 md:py-2"
             style={{ padding: "10px 30px" }}
             >
              Login
            </button>
            <button
              onClick={gotoSignup}
           
              className="text-white px-3 py-1 bg-PrimaryColor rounded-md hover:bg-blue-600 md:px-4 md:py-2"
              style={{ padding: "10px 30px" }}
            >
              Sign up
            </button>
          </div>
        </nav>
      </div>
      <Header />
    </>
  );
};

export default Navbar;
