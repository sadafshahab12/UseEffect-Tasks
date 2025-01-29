import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import WindowResizeListener from "./components/WindowResizeListener";
import Timer from "./components/Timer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import OnlineStatusChecker from "./components/OnlineStatusChecker";

function App() {


  return (
    <>
     <Counter/>
     <WindowResizeListener/>
     <Timer/>
     <ThemeSwitcher/>
     <OnlineStatusChecker/>
    </>
  );
}

export default App;
