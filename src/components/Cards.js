import PropTypes from "prop-types";
import Card from "./Card";

function Cards({ pokemons }) {
  return (
    <div className="cards">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.number} pokemon={pokemon} />
      ))}
    </div>
  );
}
Cards.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default Cards;
