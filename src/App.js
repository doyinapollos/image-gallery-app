import "./App.css";
import LoginButton from "./components/LoginButton";
//import LogoutButton from "./components/LogoutButton";
//import Routers from "./helpers/routers";
import { useAuth0 } from "@auth0/auth0-react";
import LargeScreen from "./pages/LargeScreen";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <div>
      {error && <p>Authentication Error </p>}
      {!error && isLoading && <p>Loading....</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          {/* <LogoutButton /> */}
          <LargeScreen />
        </>
      )}
    </div>
  );
}

export default App;
