import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loginlogo from "../assets/login.svg";
import { Container, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
// import logoOnly from "../assets/logoOnly.svg";
import logoOnly from "../assets/logoOnly.svg";
import api from "../api/axios";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme({
  palette: {
    error: {
      main: "#FF5A72",
    },
    grey: {
      main: "#D0D5DD",
    },
    primary: {
      main: "#946B3D",
    },
  },
});

export default function SignInSide() {
  // eslint-disable-next-line
  const navigate = useNavigate();

  const isXs = useMediaQuery("(max-width:600px)");
  // eslint-disable-next-line
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // eslint-disable-next-line
  const [error, setError] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { isLoggedIn, username, login, logout } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post(`/web/login`, {
        idPengguna: email,
        password: password,
      });
      const responseData = response.data.data;
      if (responseData) {
        navigate("/dashboard");
        // if (login) {
        //   login(responseData);
        // }
        login(responseData);
      }
    } catch (error) {
      console.log(error);
    } // if (validateEmail(email)) {
    //   // const data = new FormData(event.currentTarget);
    //   console.log({
    //     email,
    //     // password: data.get("password"),
    //   });
    //   navigate("/");
    //   setError("");
    // } else {
    //   setError("Invalid email address");
    // }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="false" disableGutters>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          {!isXs && (
            <Grid
              item
              xs={12}
              sm={4}
              md={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: (t) =>
                  t.palette.mode === "light" ? "#fcfaf8" : t.palette.grey[900],
              }}
            >
              <img src={loginlogo} alt="logo" />
            </Grid>
          )}
          <Grid item xs={12} sm={8} md={4} component={Paper} elevation={0}>
            <Box
              sx={{
                mx: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              {/* <img src={logoOnly} alt="logo" /> */}
              <img src={logoOnly} alt="logo" />

              <Typography component="h1" variant="h5">
                Log in to your account
              </Typography>
              <Typography component="h1" variant="h6">
                Silahkan masukan username dan password
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={handleEmailChange}
                  error={!!error}
                  helperText={error}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Log In
                </Button>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
