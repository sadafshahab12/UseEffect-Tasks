import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const handleGenerateNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen p-5 bg-slate-500">
        <div className="text-center space-y-5 bg-slate-700 py-5 px-10 shadow-md shadow-orange-500">
          <h1 className="sm:text-3xl text-2xl font-bold text-orange-500">
            Random Number Generator
          </h1>
          <button
            onClick={handleGenerateNumber}
            className="bg-gradient-to-tr from-orange-300 to-orange-500 py-2 px-5 rounded-md sm:text-lg text-sm cursor-pointer w-full"
          >
            Generate
          </button>
          {randomNumber && (
            <p className="flex items-center justify-center gap-5 sm:w-[14rem] w-[13rem] mx-auto bg-slate-800 sm:py-3 py-1 sm:px-3 px-2 rounded-full text-white shadow-sm shadow-white">
              Random Number :{" "}
              <span className="sm:text-lg text-sm text-black rounded-3xl bg-orange-300 border-2 border-orange-500 sm:w-12 w-10 sm:h-12 h-10 flex justify-center items-center">
                {randomNumber}
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
