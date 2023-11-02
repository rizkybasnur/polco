import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import "../App.css";

function Title(props) {
  return <Typography className="title">{props.children}</Typography>;
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
