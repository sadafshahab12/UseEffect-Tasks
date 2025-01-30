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
import DebouncedSearchInput from "./components/DebouncedSearchInput";

function App() {


  return (
    <div className="space-y-5 p-10">
     <Counter/>
     <APIFetch/>
     <WindowResizeListener/>
     <Timer/>
     <ThemeSwitcher/>
     <OnlineStatusChecker/>
     <DebouncedSearchInput/>
    </div>
  );
}

export default App;
