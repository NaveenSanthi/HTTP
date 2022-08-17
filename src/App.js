import { Fragment, useEffect, useState } from "react";
import Cart from "./Components/General/Cart";
import Movies from "./Components/MovieComponents/Movies";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errors, setError] = useState(null);
  const fetchMovies = () => {
    setLoading(true);
    fetch("https://swapi.dev/api/films")
      .then((res) => {
        if (!res.ok) {
          setLoading(false);
          throw new Error("Something Went Wrong");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        console.log(data.results);
        const movie = data.results.map((list) => {
          return {
            id: list.episode_id,
            name: list.title,
            describe: list.opening_crawl,
          };
        });
        setMovies(movie);
        setLoading(false);
      })
      .catch((err) => {
        setMovies([]);
        setError(err.message);
      });
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Fragment>
      <Cart>
        <button className="btn" onClick={fetchMovies}>
          Fetch Movies
        </button>
      </Cart>
      <Cart className="MovieArea">
        {isLoading && <p>Data is Loading Please Wait</p>}
        {!isLoading && movies.length === 0 && !errors && (
          <p>Click to fetch movie</p>
        )}
        {!isLoading && movies.length > 0 && <Movies movies={movies}></Movies>}
        {errors && <p>{errors}</p>}
      </Cart>
    </Fragment>
  );
}

export default App;
