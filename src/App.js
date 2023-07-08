import React, { useState, useEffect } from "react";
import Karakter from "./components/Karakter";
import axios from "axios";

const App = () => {
  // const [karakterler, setKarakter] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(function (response) {
        setLoading(false);
        // handle success
        setError(false);
        setCharacters(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        setLoading(false);

        setError(error);
        console.log(error);
      });

    axios
      .get("https://swapi.dev/api/films/")
      .then(function (response) {
        setMovies(response.data[0].results);
        console.log(response.data[0].results);
      })
      .catch(function (error) {
        console.log(error);
      });

    // Update the document title using the browser API
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters </h1>
      {loading && <div>Loading...</div>}
      {error && (
        <div>
          Error : {error.code} {error.message}
        </div>
      )}

      {characters.length > 0 &&
        characters.map((character, ind) => {
          // return <div key={ind}>{character.name}</div>;
          return <Karakter character={character} movies={movies} key={ind} />;
        })}
    </div>
  );
};

export default App;
