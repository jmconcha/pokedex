import PropTypes from "prop-types";
import Types from "./Types";

function Card(props) {
  const { name, types, image } = props.pokemon;
  // format number
  let number = "00" + props.pokemon.number;
  number = "#" + number.substr(number.length - 3, 3);

  return (
    <div className="card">
      <img
        className="card-image"
        src={image.url}
        width={image.width}
        height={image.height}
        alt={name}
      />
      <p className="card-subtitle">{number}</p>
      <p className="card-title">{name}</p>
      <Types types={types} />
    </div>
  );
}
Card.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Card;
