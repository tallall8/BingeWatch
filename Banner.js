import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
        /*setMovie sets the movie variable to what's passed as a
        parameter.*/
        /* The above statement generates a random number between
        0 and request.data.results.length*/
      );
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movie);

  /*Truncate function is limiting the description to a max of
  n characters.*/
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    /* The header is for the background. */
    <header
      className="banner"
      /*Doubt about this style*/
      style={{
        backgroundSize: "cover",
        /*
        It covers the image for the whole width of the screen maintaining
        the aspect ratio as same.Can also crop the image.
        */
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
        /*
        The ?. operator is called the optional chaining operator,
        instead of causing an error if the value returned is null
        (null or undefined), the expression short-circuits with a 
        return value of undefined.
         */
        // It's added within a backtick so that we can use the backdrop_path variable inside the string.
        backgroundPosition: "center center",
        /*
        The first center value denotes the horizonatal position while
        the second center value denotes the vertical position.
         */
      }}
    >
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
          {/* The above statement checks that if movie.title does 
          not exist then it is returning undefinded so move to
          movie.name and if it does not exist move to origina_name
          and return it's value. */}
        </h1>

        {/* div conatining two buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* description */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
      {/* It is used to fade the bottom part of the 
      banner for an elegant look. */}
    </header>
  );
}

export default Banner;
