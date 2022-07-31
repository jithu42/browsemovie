import React, { useState } from "react";
import Label from "../../components/Label";
import InputBox from "../../components/InputBox";
import movieList from "../movieList";
import MovieCard from "../MovieCard";
import { atom, useRecoilState } from "recoil";

export const movieListData = atom({
  key: "movieListData",
  default: movieList,
});

const BrowseMovie = () => {
  const [searchKey, setSearchKey] = useState({
    name: "",
    genre: "",
    language: "All",
  });
  const [movies, setMovies] = useRecoilState(movieListData);

  //to save the seach/filter values
  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setSearchKey((searchKey) => ({ ...searchKey, [id]: value }));
  };

  //to add movies to favorite or watch later
  const addToFavorite = (id) => {
    let moviesList = [...movies];
    let newMovieList = moviesList.map((movie) => {
      if (movie.id == id) {
        return {
          ...movie,
          isFavorite: !movie.isFavorite,
        };
      } else {
        return { ...movie };
      }
    });
    setMovies([...newMovieList]);
  };

  const { name, genre, language } = searchKey;

  // filtering movies by comparing the searchkey with movie name,
  let filteredMovie = movies.filter((movie) =>
    movie?.name?.toLowerCase()?.includes(name?.toLowerCase())
  );

  // filtering movies by comparing the searchkey with movie genre,
  if (genre) {
    filteredMovie = filteredMovie.filter((movie) =>
      movie?.genre?.toLowerCase()?.includes(genre?.toLowerCase())
    );
  }

  //filtering movies based on language
  if (language != "All") {
    filteredMovie = filteredMovie.filter(
      (movie) => movie?.language?.toLowerCase() == language
    );
  }

  return (
    <div className="div-style">
      <Label lableFor="searchKey" name="Search by name" />
      <InputBox id="name" value={name} handleOnChange={handleOnChange} />
      <Label lableFor="genreKey" name="Search by Genre" />
      <InputBox id="genre" value={genre} handleOnChange={handleOnChange} />
      <Label lableFor="langFilter" name="Filter by Language" />
      <select id="language" value={language} onChange={handleOnChange}>
        <option value="All">All</option>
        <option value="english">English</option>
        <option value="kannada">Kannada</option>
        <option value="malayalam">Malayalam</option>
      </select>

      <div className="grid-view">
        {filteredMovie.map((movie) => (
          <MovieCard
            key={`movie_${movie.id}`}
            movie={movie}
            addToFavorite={addToFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseMovie;
