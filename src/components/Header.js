import React from "react";
import Typography from "@material-ui/core/Typography";

const Header = (props) => {
  return (
    <header className="App-header">
      <Typography variant="h2">{props.text}</Typography>
    </header>
  );
};

export default Header;
