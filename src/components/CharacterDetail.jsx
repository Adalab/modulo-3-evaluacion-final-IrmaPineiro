import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterDetail({ characters }) {
  const { id } = useParams();

  const character = characters.find(
    (character) => character.id === parseInt(id)
  );

  return (
    <>
      <section className="character-detail-container">
        <Link className="link-back" to="/">
          Volver atrás
        </Link>
        <section className="character-detail">
          <img src={character.image} alt={character.name} />
          <section className="character-detail-info">
            <h2>{character.name}</h2>
            <p>
              <strong>Especie:</strong> {character.species}{" "}
              {character.species === "Human" ? "🧍‍♂️" : "👽"}
            </p>
            <p>
              <strong>Origen:</strong> {character.origin.name}
            </p>
            <p>
              <strong>Estado:</strong> {character.status}
            </p>
            <p>
              <strong>Episodios:</strong> {character.episodes}
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default CharacterDetail;
