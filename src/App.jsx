import { useEffect } from "react";
import "./app.css";
import Home from "./pages/Home";
import { smooth } from "./smooth";
import NavBar from "./components/navBar";
import Cursor from "./components/cursor";
import ProgressBar from "./components/scrollBar";

const App = () => {
  useEffect(() => {
    smooth();
  }, []);
  return (
    <>
      <ProgressBar />
      <NavBar />
      <Cursor />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Home />
        </div>
      </div>
    </>
  );
};

export default App;
