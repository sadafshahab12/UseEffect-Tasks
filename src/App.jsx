import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import WindowResizeListener from "./components/WindowResizeListener";
import Timer from "./components/Timer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import OnlineStatusChecker from "./components/OnlineStatusChecker";
import APIFetch from "./components/APIFetch";

function App() {


  return (
    <>
     <Counter/>
     <APIFetch/>
     <WindowResizeListener/>
     <Timer/>
     <ThemeSwitcher/>
     <OnlineStatusChecker/>
    </>
  );
}

export default App;
