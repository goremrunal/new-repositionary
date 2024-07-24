import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.css"; // Import CSS for Header

const Header = () => {
  const [theme, setTheme] = useState("light");
  const element = document.documentElement;

  const options = [
    {
      icon: "🌞",
      text: "light",
    },
    {
      icon: "🌙",
      text: "dark",
    },
  ];

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="header">
      <img
        className="logo"
        src={logo}
        alt="Logo"
      />

      <div className="theme-toggle">
        {options.map((option) => (
          <button
            key={option.text}
            onClick={() => setTheme(option.text)}
            className={`${
              theme === option.text ? "selected" : ""
            }`}
          >
            {option.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
