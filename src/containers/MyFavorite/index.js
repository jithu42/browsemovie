import React from "react";
import { useRecoilState } from "recoil";
import { movieListData } from "../BrowseMovie";
import MovieCard from "../MovieCard";

const MyFavorite = () => {
  const [movieList, setMovieList] = useRecoilState(movieListData);

  // to remove movies from favorites
  const addToFavorite = (id) => {
    let moviesList = [...movieList];
    let newMovieList = moviesList.map((movie) => {
      if (movie.id == id) {
        return {
          ...movie,
          isFavorite: false,
        };
      } else {
        return { ...movie };
      }
    });
    setMovieList([...newMovieList]);
  };
  const myFavoriteMovies = movieList.filter((movie) => movie.isFavorite) || [];
  return (
    <>
      {myFavoriteMovies?.length > 0 ? (
        <div className="grid-view">
          {myFavoriteMovies.map((movie) => (
            <MovieCard
              key={`movie_${movie.id}`}
              movie={movie}
              addToFavorite={addToFavorite}
            />
          ))}
        </div>
      ) : (
        <>No Favorite Movies Added</>
      )}
    </>
  );
};

export default MyFavorite;
