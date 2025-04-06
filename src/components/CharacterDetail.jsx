import React from "react";
import { useParams } from "react-router-dom";
import "../scss/components/CharacterDetail.scss";
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
    <section className="character-detail">
      <Link to="/">Volver a la lista</Link>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Especie: {character.species}</p>
      <p>Origen: {character.origin.name}</p>
      <p>Estado: {character.status}</p>
    </section>
  );
}

export default CharacterDetail;
