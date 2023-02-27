import { useState, useEffect } from "react";
import Loading from "./Loading";
import Cards from "./Cards";
import Error from "./Error";

function Content() {
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/jmconcha/fake-pokedex-api/pokemon"
    )
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.entries);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, []);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  return (
    <div className="App-content">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Cards pokemons={pokemons} />
      )}
    </div>
  );
}

export default Content;
