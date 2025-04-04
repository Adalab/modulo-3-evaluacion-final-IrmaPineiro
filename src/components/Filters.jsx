import React from "react";
import localStorageServices from "../services/localStorage";
import { useState } from "react";
import PropTypes from "prop-types";
import CharacterList from "./CharacterList";

function Filters({ searchName, onFilterChange }) {
  const handleChangeInputName = (ev) => {
    //console.log(ev.target.value);
    localStorageServices.set("searchName", ev.target.value);
    onFilterChange(ev.target.value);
  };

  //no olvidar -> Filters.propTypes = {
  return (
    <form action="">
      <input
        type="text"
        placeholder="Buscar por nombre"
        onChange={handleChangeInputName}
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
