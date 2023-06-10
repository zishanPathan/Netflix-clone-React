import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../Requests";

function Banner() {
  const [movies, setmovie] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.fetchNetflixOriginals).then((response) => {
      setmovie(response.data.results);
    });
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">my list</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
