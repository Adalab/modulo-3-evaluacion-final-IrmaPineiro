import React from "react";
import localStorageServices from "../services/localStorage";
import { useState } from "react";
import PropTypes from "prop-types";
import CharacterList from "./CharacterList";
import "../scss/components/Filters.scss";

function Filters({ searchName, onFilterChange }) {
  const handleChangeInputName = (event) => {
    //console.log(ev.target.value);
    localStorageServices.set("searchName", event.target.value);
    onFilterChange(event.target.value);
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
        className="form-input"
        type="text"
        placeholder="Buscar por nombre"
        onChange={handleChangeInputName}
        onKeyDown={hanldeChangeInputEnter}
        value={searchName}
      />
    </form>
  );
}

Filters.propTypes = {
  searchName: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filters;
