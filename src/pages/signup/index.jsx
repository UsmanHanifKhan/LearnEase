import React, { useState } from "react";
import "../../App.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ApiUrl } from "../../Constant/ApiUrl";
import img from "../../assets/images/signupimage.png";
import logo from "../../assets/images/logo.png";
import { GoogleLogin } from '@react-oauth/google';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [Validation, setValidation] = useState("")
  console.log(formData);
  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigateLogin = () => {
    navigate("/login");
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions like sending form data to backend or any other logic
    console.log("Form submitted:", formData);

    axios
      .post(ApiUrl + "/register", formData)
      .then((x) => {
        console.log(x)
        if (x.data === "User created!") {
          setFormData({
            username: "",
            email: "",
            password: "",
          });
          navigate("/login");
          console(x.data)
        } else {
          setValidation(x.data)
          console(x.data)
        }
      })
      .catch((x) => console.log(x));
  };
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <div className="containers">
        <nav className="top-0 z-10 fixed bg-white border-b-[2px] border-[#white] bg-opacity-25 backdrop-filter backdrop-blur-lg flex flex-col sm:flex-row items-center justify-between px-6 py-4 w-full">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-10 sm:h-15 md:h-20 lg:h-12 mb-4 sm:mb-0"
          />
        </nav>
      </div>
      <div className="bg-white flex flex-col lg:flex-row md:flex-row lg:p-28 md:justify-center lg:relative md:items-center h-screen ">
        <div className="flex-grow text-start lg:block lg:mt-40 hidden">
          <h1 className="text-[#2979BF] text-2xl font-semibold">Create an Account</h1>
          <p className="text-[10px] w-72 text-[#6A6A6A]">
            Welcome to <span className="text-[#000]">Mockli!</span> To get
            started, please fill out the form below to create your account.
          </p>
          <img
            src={img}
            width={380}
            alt="signup Image"
            className="-scale-x-100"
          />
        </div>

        <div
          className="max-w-md mx-auto mt-28 rounded-lg lg:rounded-t-3xl sm:rounded-t-3xl lg:absolute lg:bottom-0 lg:right-20 bg-white p-6 md:p-8 sm:p-8 lg:p-8 shadow-lg"
        // style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}
        >
          <p className="text-start font-medium text-sm leading-6">
            LET'S GET YOU STARTED
          </p>
          <h2 className="text-xl text-start font-semibold mb-10">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
            <div className="App relative flex justify-center items-center ">
              <input
                type="text"
                name="username"
                value={formData.name}
                autoComplete="off"
                onChange={handleInputChange}
                placeholder="Input"
                className="h-8 lg:h-10 w-48 sm:w-72 md:w-72 lg:w-72 px-6 text-black border-border_Line border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-300 focus:border-border-Line placeholder-black placeholder-opacity-0 transition duration-200"
              />
              <span className="absolute bg-white text-[12px] ps-2 pe-2 mr-32 lg:mr-56 md:mr-56 sm:mr-56 mb-8">
                Name
              </span>
            </div>

            <div className="App relative flex justify-center items-center ">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="off"
                placeholder="Input"
                className={`h-8 lg:h-10  w-48 sm:w-72 md:w-72 lg:w-72 px-6  text-black ${Validation == "User Already exist!" ? " border-red-800" : "border-border_Line"} border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-300 focus:border-border-Line placeholder-black placeholder-opacity-0 transition duration-200`}
              />
              <span className="absolute bg-white text-[12px] ps-2 pe-2 mr-32 lg:mr-56 md:mr-56 sm:mr-56 mb-8">
                Email
              </span>
            </div>

            <div className="App flex relative justify-center items-center ">
              <input
                type="password"
                name="password"
                autoComplete="off"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Input"
                className="h-8 w-48 lg:h-10  sm:w-72 md:w-72 lg:w-72 px-6 text-black border-border_Line border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-300 focus:border-border-Line placeholder-black placeholder-opacity-0 transition duration-200"
              />
              <span className="absolute bg-white ps-2 text-[12px] pe-2 mr-[7rem] lg:mr-48 md:mr-48 sm:mr-48 mb-8">
                Password
              </span>
            </div>
            <div className="text-red-600">
              {Validation}
            </div>
            <button
              type="submit"
              className=" w-48 lg:h-10  text-[10px] sm:w-72 md:w-72 lg:w-72 h-8 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-600"
            >
              GET STARTED
            </button>
          </form>
          <p>Or</p>

          <div className="flex flex-col gap-4 justify-center items-center pb-5">
            {/* <button
              onClick={}
              className="relative w-48 sm:w-72 md:w-72 lg:w-72 flex items-center justify-center  text-border_Line py-2 rounded-md border border-border_Line "
            >
              <div className="absolute left-4">
                <FcGoogle />
              </div>
              <span className="ml-4 text-[10px]">GET STARTED</span>
            </button> */}
            <GoogleLogin

              onSuccess={credentialResponse => {
                if (credentialResponse) {

                  const res = JSON.parse(atob(credentialResponse.credential
                    .split('.')[1]));

                  axios.post(`${ApiUrl}/register`, {
                    username: res.name,
                    email: res.email
                  })
                    .then(x => {
                      console.log(x)
                      if (x?.data == "User created!") {

                        localStorage.setItem('user', x.data.token);
                        navigate("/login");
                      }else{
                        setValidation(x.data)

                      }
                    })
                  console.log(res);
                }
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
          <p className="text-[12px] lg:text-[16px] md:text-[16px] sm:text-[16px] ">
            Already have an account?{" "}
            <span className="font-bold cursor-pointer" onClick={navigateLogin}>
              LOGIN HERE
            </span>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
