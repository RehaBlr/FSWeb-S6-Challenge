import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  // const [karakterler, setKarakter] = useState([]);
  const [characters, setCharacters] = useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(function (response) {
        // handle success
        setCharacters(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    // Update the document title using the browser API
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Karakterler </h1>

      {characters.map((character, ind) => {
        return <div key={ind}>{character.name}</div>;
      })}
    </div>
  );
};

export default App;
