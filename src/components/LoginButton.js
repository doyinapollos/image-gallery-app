// src/components/LoginButton.js
import React from "react";
// import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ImageCarousel from "./ImageCarousel";
//import { AuthRoutes } from "../helpers/url";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  // const history = useHistory();
  // const handleClick = () => {
  //   // Use history to navigate programmatically
  //   history.push("/home");
  // };

  // window.location.href = "/dashboard";
  // const navigate = useNavigate();

  // navigate(AuthRoutes.LargeScreen);

  return (
    !isAuthenticated && (
      <div className="w-full h-auto flex flex-col">
        <div className="w-full h-auto bg-[#f1f1f1] flex flex-col justify-start items-center ">
          <div className="flex justify-between items-center w-[90%] h-[70px] p-4">
            <div className="text-gray-600 text-lg font-[900]">@cariebi</div>

            <button
              onClick={() => loginWithRedirect()}
              className="tex-[12px] lg:bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
            >
              Log In/Sign Up
            </button>
          </div>
          <div className="mt-[30px] md:mt-[0] w-[90%] h-auto flex flex-col justify-start items-center ">
            <div className="w-[70%] h-[150px] text-black flex flex-col justify-center items-center ">
              <h1 className=" text-[24px] font-[700] ">
                Welcome to Our Image Gallery!
              </h1>
              <p className="">
                Explore a world of stunning animal, bird, and wildlife images.
              </p>
              <p className="">
                To start using our drag and drop feature and to save your
                favorite images, please sign up or log in to your account.
              </p>
            </div>
            <div className="mt-[70px] md:mt-[0px] w-[90%] h-[270px] flex justify-center items-center ">
              <ImageCarousel />
            </div>
          </div>
        </div>
        <div className="w-full h-[200px] bg-gray-300 ">
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-gray-500 text-lg">@copy write. cariebi 2023</p>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginButton;
