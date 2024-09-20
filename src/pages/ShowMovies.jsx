import { useEffect, useState } from "react";
import axios from "axios";

const ShowMovies = () => {
  const [movies, resMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get("http://localhost:4242/api/movies", {
        withCredentials: true,
      });
      console.log(response);
      resMovies(response.data);
    };
    getMovies();
  }, []);
  return (
    <div>
      ShowMovies
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p> {movie.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowMovies;
