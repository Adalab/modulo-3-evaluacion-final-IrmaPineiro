import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
              <strong>Species:</strong> {character.species}
            </p>
            <p>
              <strong>Origin:</strong> {character.origin.name}
            </p>
            <p>
              <strong>Status:</strong> {character.status}
            </p>
            <p>
              <strong>Episodes:</strong> {character.episodes}
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default CharacterDetail;
