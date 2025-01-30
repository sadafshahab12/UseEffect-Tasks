import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <button onClick={()=> setTheme("light")}>Light</button>
      <button onClick={()=> setTheme("dark")}>Dark Theme</button>
      <p>Current Theme : {theme}</p>
    </div>
  );
};

export default ThemeSwitcher;
