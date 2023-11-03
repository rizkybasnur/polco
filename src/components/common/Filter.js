import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { Search } from "../../assets/search.js";
import styled from "@emotion/styled";

const StyledSelect = styled(Select)`
  border-color: red; // Change this to your desired border color
  &:focus {
    border-color: green; // Change this to your desired focus border color,
    color:white;
  }
`;

function Filter({ page }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // const onSearch = () => {
  //   console.log("search");
  // };

  const variantBackgroundColor = {
    filled: "search.main",
  };

  const variantColor = {
    filled: "white",
  };

  function MyIconButton({ variant, ...other }) {
    return (
      <IconButton
        sx={{
          borderRadius: 2,
          width: 44,
          backgroundColor: variantBackgroundColor[variant],
          color: variantColor[variant],
          "&:hover": { backgroundColor: variantBackgroundColor[variant] },
        }}
        {...other}
      />
    );
  }
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        backgroundColor: "#241A0F",
        color: "#F8F3ED",
      }}
    >
      <FormControl
        fullWidth
        size="small"
        style={{
          border: "0.5px solid #694C2B",
          borderRadius: 8,
          color: "#F8F3ED",
        }}
      >
        <InputLabel id="select-label" style={{ color: "#F8F3ED" }}>
          Pilih wilayah
        </InputLabel>

        <StyledSelect
          labelId="StyledSelect-label"
          id="StyledSelect"
          value={age}
          label="Pilih Wilayah"
          onChange={handleChange}
          style={{color:'white'}}
        >
          <MenuItem value="">Pilih Wilayah</MenuItem>
          <MenuItem value={10}>Jawa Timur</MenuItem>
          <MenuItem value={20}>Jawa Tengah</MenuItem>
          <MenuItem value={30}>Jawa Barat</MenuItem>
        </StyledSelect>
      </FormControl>
      <MyIconButton
        variant="filled"
        color="primary"
        aria-label="add to shopping cart"
      >
        <Search />
      </MyIconButton>
    </div>
  );
}

export default Filter;
