// src/components/LoginButton.js
import React from "react";
// import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
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
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-[70%] bg-gray-500 flex justify-center items-start ">
          <div className="flex justify-between items-center w-[90%] h-[70px] p-4">
            <div className="text-white text-lg font-bold">Your Logo</div>

            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Log In{" "}
            </button>
          </div>
        </div>
        <div className="w-full h-[30%] bg-yellow-500">
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-white text-lg">@copy write. cariebi 2023</p>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginButton;
