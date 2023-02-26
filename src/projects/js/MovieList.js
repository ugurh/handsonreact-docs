import React from "react";
import { NavLink } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`./${movie.id}`}>{movie.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
