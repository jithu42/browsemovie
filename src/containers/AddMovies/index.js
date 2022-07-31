import React, { useState } from "react";
import Label from "../../components/Label";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import { useRecoilState } from "recoil";
import { movieListData } from "../BrowseMovie";
import { useNavigate } from "react-router-dom";

const AddMovies = () => {
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState({
    language: "Kannada",
    isFavorite: false,
  });
  const [errorMsg, setErrorMsg] = useState({});
  const [movies, setMovies] = useRecoilState(movieListData);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setMovieData((movieData) => ({ ...movieData, [id]: value }));
    setErrorMsg((errorMsg) => ({ ...errorMsg, [id]: false }));
  };

  //to save the new movie data in the list
  const saveMovie = () => {
    if (isAllDataFilled()) {
      setMovies((movies) => [
        ...movies,
        { ...movieData, id: movies.length + 1 },
      ]);
      setMovieData({ isFavorite: false });
      navigate("/");
    }
  };

  //to check if all required fields are entered
  const isAllDataFilled = () => {
    if (!movieData.name) {
      setErrorMsg((errorMsg) => ({ ...errorMsg, name: true }));
    }
    if (!movieData.description) {
      setErrorMsg((errorMsg) => ({ ...errorMsg, description: true }));
    }
    if (!movieData.genre) {
      setErrorMsg((errorMsg) => ({ ...errorMsg, genre: true }));
    }
    if (!movieData.cast) {
      setErrorMsg((errorMsg) => ({ ...errorMsg, cast: true }));
    }
    if (!movieData.language) {
      setErrorMsg((errorMsg) => ({ ...errorMsg, language: true }));
    }
    if (
      movieData.name &&
      movieData.description &&
      movieData.genre &&
      movieData.cast &&
      movieData.language
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="div-style" style={{ textAlign: "center" }}>
      <div className="add-movie-div">
        <Label lableFor="name" name="Movie Name" />
        <InputBox
          id="name"
          value={movieData?.name}
          name="name"
          handleOnChange={handleOnChange}
        />{" "}
        {errorMsg?.name && (
          <span className="error-message">please enter movie name</span>
        )}
      </div>

      <div className="add-movie-div">
        <Label lableFor="description" name="Movie Description" />
        <InputBox
          id="description"
          value={movieData?.description}
          name="description"
          handleOnChange={handleOnChange}
        />{" "}
        {errorMsg?.description && (
          <span className="error-message">please enter movie description</span>
        )}
      </div>
      <div className="add-movie-div">
        <Label lableFor="genre" name="Movie Genre" />
        <InputBox
          id="genre"
          value={movieData?.genre}
          name="genre"
          handleOnChange={handleOnChange}
        />{" "}
        {errorMsg?.genre && (
          <span className="error-message">please enter movie genre</span>
        )}
      </div>
      <div className="add-movie-div">
        <Label lableFor="cast" name="Movie Casts" />
        <InputBox
          id="cast"
          value={movieData?.cast}
          name="cast"
          handleOnChange={handleOnChange}
        />{" "}
        {errorMsg?.cast && (
          <span className="error-message">please enter movie casts</span>
        )}
      </div>
      <div className="add-movie-div">
        <Label lableFor="language" name="Language" />
        <select
          id="language"
          style={{ height: "32px" }}
          value={movieData?.language}
          onChange={handleOnChange}
        >
          <option value="Kannada">Kannada</option>
          <option value="English">English</option>
          <option value="Malayalam">Malayalam</option>
        </select>
        {errorMsg?.language && (
          <span className="error-message">please enter movie language</span>
        )}
      </div>
      <div className="add-movie-div" style={{ marginLeft: " 10%" }}>
        <Button buttonName="Save" handleOnClick={saveMovie} />
      </div>
    </div>
  );
};

export default AddMovies;
