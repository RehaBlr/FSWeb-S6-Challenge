import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [karakterler, setKarakter] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then(function (response) {
        // handle success
        setKarakter(response.data.results);
        console.log(response.data.results);
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

      {karakterler.map((karakter, ind) => {
        return <div key={ind}>{karakter.name}</div>;
      })}
    </div>
  );
};

export default App;
