import "./App.css";
// import LoginButton from "./components/LoginButton";
//import LogoutButton from "./components/LogoutButton";
import Routers from "./helpers/routers";
// import { useAuth0 } from "@auth0/auth0-react";
// import LargeScreen from "./pages/LargeScreen";
// import { RingLoader } from "react-spinners";

function App() {
  // const { isLoading, error } = useAuth0();
  return <Routers />;
  // return (
  //   // <div>
  //   //   {/* {error && <p>Authentication Error </p>}
  //   //   {!error && isLoading && (
  //   //     <div className="flex justify-center items-center h-screen">
  //   //       <RingLoader color="#36D7B7" size={100} />{" "}
  //   //     </div>
  //   //   )}
  //   //   {!error && !isLoading && (
  //   //     <>
  //   //       <LoginButton />
  //   //       {/* <LogoutButton /> */}
  //   //       <LargeScreen />
  //   //     </>
  //   //   )} */}
  //   // </div>
  // );
}

export default App;
