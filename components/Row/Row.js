import React, { useState, useEffect } from "react";
/*{useState,useEffect} this basically states that in react there is an object with useState,useEffect as it's keys within it.SO we are just passing
those here.*/
import axios from "../../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); //state in ReactJS
  // setMovies is a function which sets the state of movies with initital state as [].

  // Read about UseEffect later.
  useEffect(() => {
    /*if [] which is empty , run once when the row loads, and
    don't run it again.This will ony run once when the page loads
    and it won;t run again.*/
    /* Basically when it was [movies] it would have run each
    time the movie changes.*/

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      /*axios.get(URL) basically does baseURL + URL fetched from the 
      requests.js file. */
      /*await waits until and unless a response is not fetched from the
      server. */
      // console.log(request);
      setMovies(request.data.results);
      // The above function sets the movies variable to the data fetched from request.
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  /*[fetchUrl] above is basically written because it's something which keeps changing
  and hence this function must run again if this variable changes as I want new movies 
  on refresh.*/
  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* several row__posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            /*The above statement basically says that if isLargeRow is true
              then use the class row__posterLarge also with the row_poster class. */
            src={
              base_url + (isLargeRow ? movie.poster_path : movie.backdrop_path)
            }
            /*If isLargeRow is true then add the poster path
              else add the backdrop path.*/
            alt={movie.name}
          />
        ))}
        {/* poster path stores the image of the movie on the display page when it loads. */}
      </div>
    </div>
  );
}

export default Row;
/*Only one default statement can be used in ReactJS.*/
