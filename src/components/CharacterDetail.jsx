import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CharacterDetail({ characters }) {
  const { id } = useParams();

  //   if (!characters || characters.length === 0) {
  //     return <p>Cargando...</p>;
  //   }

  const character = characters.find(
    (character) => character.id === parseInt(id)
  );
  if (!character) {
    return <p>Personaje no encontrado.</p>;
  }
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
            <p>Especie: {character.species}</p>
            <p>Origen: {character.origin.name}</p>
            <p>Estado: {character.status}</p>
            <p>Episodio: {character.episode}</p>
          </section>
        </section>
      </section>
    </>
  );
}

export default CharacterDetail;
