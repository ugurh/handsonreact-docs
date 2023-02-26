import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "./MockMovies";

const MovieDetail = () => {
  let { id } = useParams();
  id = Number(id);
  const movie = movies.find((movie) => movie.id === id);

  return (
    <div>
      <h3>{movie.name}</h3>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetail;
