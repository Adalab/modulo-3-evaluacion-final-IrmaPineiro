import React from "react";
import localStorageServices from "../services/localStorage";
import { useState } from "react";
import PropTypes from "prop-types";
import "../scss/components/Filters.scss";

function Filters({
  searchName,
  onFilterChangeName,
  searchSpecie,
  onFilterChangeSpecie,
}) {
  const handleChangeInputName = (event) => {
    //console.log(ev.target.value);
    localStorageServices.set("searchName", event.target.value);
    onFilterChangeName(event.target.value);
  };
  const handleChangeInputSpecie = (event) => {
    //console.log(ev.target.value);
    localStorageServices.set("searchSpecie", event.target.value);
    onFilterChangeSpecie(event.target.value);
  };

  const hanldeChangeInputEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      //console.log("Enter presionado");
    }
  };

  //no olvidar -> Filters.propTypes = {
  return (
    <form className="form" action="">
      <input
        className="form-input-name"
        type="text"
        placeholder="Buscar por nombre"
        onChange={handleChangeInputName}
        onKeyDown={hanldeChangeInputEnter}
        value={searchName}
      />

      <input
        className="form-input-specie"
        type="text"
        placeholder="Buscar por especie"
        onChange={handleChangeInputSpecie}
        onKeyDown={hanldeChangeInputEnter}
        value={searchSpecie}
        id="inputSpecie"
      />
    </form>
  );
}

Filters.propTypes = {
  searchName: PropTypes.string.isRequired,
  onFilterChangeName: PropTypes.func.isRequired,
  searchSpecie: PropTypes.string.isRequired,
  onFilterChangeSpecie: PropTypes.func.isRequired,
};

export default Filters;
