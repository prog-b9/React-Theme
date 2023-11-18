/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Landing from "./components/home/Landing";
import Navbar from "./components/layout/Navbar";
import About from "./components/home/About";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handelSwitchTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="App" data-theme={theme}>
      <Navbar theme={theme} handelSwitchTheme={handelSwitchTheme} />
      <Landing />
      <About />
    </div>
  );
}

export default App;
