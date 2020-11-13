import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <TextField
        id="filled-basic"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        label="Type movie name"
        variant="filled"
      />
      <Button
        onClick={callSearchFunction}
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        // className="searchBtn"
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
