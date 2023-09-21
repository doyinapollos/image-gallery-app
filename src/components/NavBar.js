import React, { useState } from "react";
import SearchIcon from "../assets/svgs/search-icon.svg";
import LogoutButton from "./LogoutButton";

function NavBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <nav className="w-[100%] h-[80px] bg-[#f1f1f1] flex justify-center items-center ">
      <div className="w-[40%] text-[12px] lg:w-[80%] lg:text-[14px] h-full flex justify-center items-center ">
        <div className="w-[160px] lg:w-[293px] h-[31px] flex justify-center items-center bg-gray-500 opacity-50 ">
          <input
            type="text"
            placeholder="Search by tag"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[130px] lg:w-[250px] h-[30px] rounded-[5px] pl-[5px] bg-none "
          />{" "}
          <div className="w-[27px] lg:w-[40px] h-[30px] flex justify-center items-center ">
            <img className=" " onClick={handleSearch} src={SearchIcon} alt="" />
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="text-[12px] ml-[10px] lg:text-[14px] lg:ml-[0px] w-[20%] h-full flex justify-center items-center ">
        <LogoutButton />
      </div>{" "}
    </nav>
  );
}

export default NavBar;
