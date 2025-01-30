import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme;
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
    document.body.style.color = theme === "light" ? "#333" : "#fff";
    return () => {
      document.body.className = "";
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="text-center py-8 shadow-lg inline-block w-full border ">
      <h1 className="text-2xl font-bold text-center py-5">UseEffect Clean Up Function -- Task 5 -- Theme Switcher </h1>
      <button className="bg-slate-800 text-white rounded-md cursor-pointer py-2 px-4"  onClick={toggleTheme}>{theme === "light" ? "Dark Theme" : "Light Theme"}</button>
    </div>
  );
};

export default ThemeSwitcher;
