import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar"
import BrowseMovie from "../BrowseMovie"
import MyFavorite from "../MyFavorite";
import AddMovies from "../AddMovies";

const RouterPaths = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<BrowseMovie />} />
        <Route path="/addMovies" element={<AddMovies />} />
        <Route path="/myFavorite" element={<MyFavorite />} />
      </Routes>
    </div>
  );
};

export default RouterPaths;
