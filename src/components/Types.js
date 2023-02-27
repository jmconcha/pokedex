import PropTypes from "prop-types";

function Types({ types }) {
  const typesSpan = types.map((type) => (
    <span key={type} className={`pokemon-type type-${type.toLowerCase()}`}>
      {type}
    </span>
  ));

  return <div className="types-wrapper">{typesSpan}</div>;
}
Types.propTypes = {
  types: PropTypes.array.isRequired,
};

export default Types;
