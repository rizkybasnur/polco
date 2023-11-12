import {
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import Orders from "../components/Orders";
import Deposits from "../components/Deposits";
import DataMasukPerWilayah from "../components/DataMasukPerWilayah";
import Filter from "../components/common/Filter";
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

export default function Tes() {
  // eslint-disable-next-line
  const [data, setData] = React.useState();
  React.useEffect(() => {
    api
      .get(`/web/dashboard`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        // Handle errors
      });
  }, []);

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
      <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Filter />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={0}
              sx={{
                border: "1px solid #694C2B",
                display: "flex",
                flexDirection: "column",
                height: 305,
              }}
            >
              <Deposits
                title="Total Data Masuk (Angka)"
                isDonut={true}
                icon="graph"
                data={data?.subHeader?.masuk}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={0}
              sx={{
                border: "1px solid #694C2B",
                display: "flex",
                flexDirection: "column",
                height: 305,
              }}
            >
              <Deposits
                title="Total Data Masuk (Persentase)"
                isDonut={true}
                icon="percentage"
                data={data?.subHeader?.total}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={0}
              sx={{
                border: "1px solid #694C2B",
                display: "flex",
                flexDirection: "column",
                height: 305,
              }}
            >
              <Deposits
                title="User Online"
                isDonut={true}
                icon="users"
                data={data?.subHeader?.toalUsers}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={0}
              sx={{
                border: "1px solid #694C2B",
                display: "flex",
                flexDirection: "column",
                height: 305,
              }}
            >
              <Deposits
                title="Total Data Per Daerah"
                isDonut={false}
                icon="graph"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={8}>
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #694C2B",
              }}
            >
              <Orders data={data?.dataWawancara} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #694C2B",
              }}
            >
              <DataMasukPerWilayah data={data?.wilayah} />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
        {/* <PdfExample/> */}
      </Container>
    </Box>
  );
}
