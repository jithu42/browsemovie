import React, { useState } from "react";
import logo from "../../assets/movie-logo.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tab-1");
  const handleOnClick = (tab) => {
    setActiveTab(tab);
    tab == "tab-1"
      ? navigate("/")
      : tab == "tab-2"
      ? navigate("/addMovies")
      : navigate("/myFavorite");
  };
  return (
    <div className="nav-bar">
      <img className="logo" src={logo} />
      <a
        className={`${activeTab == "tab-1" ? "active" : ""}`}
        onClick={() => handleOnClick("tab-1")}
      >
        Browse Movie
      </a>
      <a
        className={`${activeTab == "tab-2" ? "active" : ""}`}
        onClick={() => handleOnClick("tab-2")}
      >
       Add Movies
      </a>
      <a
        className={`${activeTab == "tab-3" ? "active" : ""}`}
        onClick={() => handleOnClick("tab-3")}
      >
        My Favorite
      </a>
    </div>
  );
};

export default NavBar;
