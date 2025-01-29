import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {

    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme)
  }, [theme]);
  const handleTheme = (newTheme) => {
   
      setTheme(newTheme)

  };
  return (
    <div>
      <button onClick={handleTheme}>Light</button>
      <button onClick={handleTheme}>Dark Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
