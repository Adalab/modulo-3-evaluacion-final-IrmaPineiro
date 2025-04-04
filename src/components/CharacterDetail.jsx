import React from "react";
import { useParams } from "react-router-dom";
import "../scss/components/CharacterDetail.scss";

function CharacterDetail() {
  const { id } = useParams();
  console.log(id);
}

export default CharacterDetail;
