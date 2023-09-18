import React from "react";
import LargeScreen from "./LargeScreen";
//import MobileView from "./MobileView";

function Home() {
  return (
    <div>
      <div className="hidden md:block lg:block ">
        <LargeScreen />
      </div>{" "}
      {/* <div className="md:hidden lg:hidden ">
                    <MobileView />
                  </div>{" "} */}{" "}
    </div>
  );
}

export default Home;
