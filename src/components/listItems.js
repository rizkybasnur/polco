import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import chartPie from "../assets/chartPie.svg";
import dropDown from "../assets/dropDown.svg";
import point from "../assets/point.svg";
import { Link, useLocation } from "react-router-dom";
export default function MainListItems() {
  const [open, setOpen] = React.useState(true);
  const location = useLocation();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <ListItemButton
        sx={{
          color: "#48341E",
          "&.Mui-selected": {
            backgroundColor: "#48341E",
          },
          "&:hover": {
            backgroundColor: "blue",
          },
        }}
        component={Link}
        to="/"
        selected={location.pathname === "/"}
      >
        <img src={chartPie} alt="logo" />
        <ListItemText
          style={{ color: "#F8F3ED" }}
          primary="Dashboard"
          sx={{ pl: 2 }}
        />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <img src={dropDown} alt="logo" />
        <ListItemText
          style={{ color: "#F8F3ED" }}
          primary="Progress Data"
          sx={{ pl: 2 }}
        />
        {open ? (
          <ExpandLess style={{ color: "#F8F3ED" }} />
        ) : (
          <ExpandMore style={{ color: "#F8F3ED" }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{
              pl: 7,
              "&.Mui-selected": {
                backgroundColor: "#48341E",
              },
            }}
            component={Link}
            to="/monitoring"
            selected={location.pathname === "/monitoring"}
          >
            <img src={point} alt="logo" />
            <ListItemText
              style={{ color: "#F8F3ED" }}
              primary="Monitoring"
              sx={{ pl: 2 }}
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              pl: 7,
              "&.Mui-selected": {
                backgroundColor: "#48341E",
              },
            }}
            component={Link}
            to="/per-relawan"
            selected={location.pathname === "/per-relawan"}
          >
            <img src={point} alt="logo" />
            <ListItemText
              style={{ color: "#F8F3ED" }}
              primary="Per Relawan"
              sx={{ pl: 2 }}
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              pl: 7,
              "&.Mui-selected": {
                backgroundColor: "#48341E",
              },
            }}
            component={Link}
            to="/per-wilayah"
            selected={location.pathname === "/per-wilayah"}
          >
            <img src={point} alt="logo" />
            <ListItemText
              style={{ color: "#F8F3ED" }}
              primary="Per Wilayah"
              sx={{ pl: 2 }}
            />
          </ListItemButton>
          <ListItemButton
            sx={{
              pl: 7,
              "&.Mui-selected": {
                backgroundColor: "#48341E",
              },
            }}
            component={Link}
            to="/per-hari"
            selected={location.pathname === "/per-hari"}
          >
            <img src={point} alt="logo" />
            <ListItemText
              style={{ color: "#F8F3ED" }}
              primary="Per Hari"
              sx={{ pl: 2 }}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </React.Fragment>
  );
}
