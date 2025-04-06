import React from "react";
import PropTypes from "prop-types";
import "../scss/components/CharacterCard.scss";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <li className="character-card">
      <Link to={`/detail/${character.id}`}>
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>{character.species}</p>
      </Link>
    </li>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;
