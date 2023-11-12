import { Box, Container, Grid, Toolbar } from "@mui/material";
import * as React from "react";
import "devextreme/dist/css/dx.light.css";
import { UserContext } from "../context/UserContext";
import Table from "../components/common/Table";
import api from "../api/axios";

export default function Tes() {
  // eslint-disable-next-line
  const [data, setData] = React.useState([]);
  // eslint-disable-next-line
  const userContext = React.useContext(UserContext);
  // eslint-disable-next-line
  const { propQc } = userContext || {};

  React.useEffect(() => {
    if (propQc) {
      const fetchData = async () => {
        try {
          const response = await api.post(`/web/kuisioner`, {
            kode_event: propQc.kodeEvent,
            kuisioner: "41",
          });
          const responseData = response.data.data;

          if (responseData) {
            setData(responseData);
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
    // eslint-disable-next-line
  }, []);

  const column = [
    {
      caption: "nomor",
      dataField: "no_jawab",
    },
    {
      caption: "kuisioner",
      dataField: "no_kuisioner",
    },
    {
      caption: "jawaban",
      dataField: "jawaban",
    },
    {
      caption: "waktu",
      dataField: "waktu",
    },
    {
      caption: "durasi",
      dataField: "durasi",
    },
  ];

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
          <Grid item xs={12}>
            {data && (
              <Table
                datas={data}
                column={column}
                paging={true}
                scrolling={true}
                sorting={true}
                header={true}
                title="QC Data Wawancara"
              />
            )}
          </Grid>
        </Grid>
        {/* <Copyright sx={{ pt: 4 }} /> */}
      </Container>
    </Box>
  );
}
