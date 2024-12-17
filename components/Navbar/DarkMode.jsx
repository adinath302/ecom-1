import React from "react";
import lightsun2 from "../../assets/lightsun2.png";
import Darksun from "../../assets/Darksun.png";
const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element
  console.log(element);

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={lightsun2}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-2 z-10 ${ theme === "dark" ? "opacity-0" : "opacity-100" }`}
      />
      <img
        src={Darksun}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
