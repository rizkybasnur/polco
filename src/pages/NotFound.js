import { Box, Toolbar } from "@mui/material";
import React from "react";
import notFound from "../assets/404.svg";

const About = () => {
  const title = {
    fontFamily: "DM Sans",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "42px",
    letterSpacing: "0em",
    textAlign: "center",
  };

  const subtitle = {
    fontFamily: "DM Sans",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "#667085",
  };
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#241A0F" : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <img src={notFound} alt="logo" />
      <br />
      <div style={title}>Halaman tidak ditemukan</div>
      <div style={subtitle}>
        Mungkin Anda telah salah memasukkan URL atau halaman yang Anda cari
        telah dipindahkan atau dihapus. Silakan periksa kembali URL yang Anda
        masukkan atau navigasikan kembali ke halaman utama.
      </div>
    </Box>
  );
};

export default About;
