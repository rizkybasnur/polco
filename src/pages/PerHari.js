import { Box, Container, Grid, Toolbar } from "@mui/material";
import * as React from "react";
import Filter from "../components/common/Filter";
import "devextreme/dist/css/dx.light.css";
import ProgressBar from "../components/ProgressBar";
import {
  Column,
  DataGrid,
  Paging,
  Scrolling,
  Sorting,
} from "devextreme-react/data-grid";
// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export default function Tes() {
  // eslint-disable-next-line
  const [data, setData] = React.useState([
    {
      nomor: "1",
      user: "Nancy Davolio",
      nama: "Sales Representative",
      handphone: "50",
      desa: "50",
      target: "50",
      hariIni: "50",
      totalAngka: "50",
      totalPersen: "100",
    },
    {
      nomor: "2",
      user: "Rubia",
      nama: "Sales Representative",
      handphone: "50",
      desa: "50",
      target: "50",
      hariIni: "50",
      totalAngka: "50",
      totalPersen: "100",
    },
    {
      nomor: "3",
      user: "Sho",
      nama: "Sales Representative",
      handphone: "50",
      desa: "50",
      target: "50",
      hariIni: "50",
      totalAngka: "50",
      totalPersen: "100",
    },
  ]);

  // eslint-disable-next-line
  const [gridInstance, setGridInstance] = React.useState(null);

  React.useEffect(() => {
    if (gridInstance) {
      gridInstance.refresh();
    }
    // eslint-disable-next-line
  }, [data]);
  const BarCell = (cellData) => {
    return <ProgressBar completed={cellData.value} />;
  };
  const onCellPrepared = (e) => {
    if (e.rowType === "data") {
      e.cellElement.style.color = "#F8F3ED";
      e.cellElement.style.backgroundColor = "#241A0F";
      e.cellElement.style.border = "1px solid #694C2B";
    } else if (e.rowType === "header") {
      e.cellElement.style.backgroundColor = "#48341E";
      e.cellElement.style.color = "#F0E6DB";
      e.cellElement.style.border = "1px solid #694C2B";
      e.cellElement.style.borderBottom = "none";
    }
    // Tracks the `Amount` data field
    // e.watch(function() {
    //     return e.data.Amount;
    // }, function() {
    //     e.cellElement.style.color = e.data.Amount >= 10000 ? "green" : "red";
    // })
    // }
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
      <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Filter />
          </Grid>
          <Grid item xs={12}>
            <DataGrid
              showBorders={true}
              dataSource={data}
              allowColumnResizing={true}
              showColumnLines={true}
              showRowLines={true}
              hoverStateEnabled={true}
              columnAutoWidth={true}
              onCellPrepared={onCellPrepared}
            >
              <Column
                sortOrder="asc"
                caption="Nomor"
                width="auto"
                cssClass="table-center"
                calculateCellValue={(rowData) => {
                  return data.indexOf(rowData) + 1;
                }}
              />
              <Column
                sortOrder="asc"
                width="auto"
                caption="User"
                dataField="user"
                cssClass="table-center"
              />
              <Column
                sortOrder="asc"
                caption="Nama"
                dataField="nama"
                cssClass="table-center"
              />
              <Column
                sortOrder="asc"
                width="auto"
                caption="Handphone"
                dataField="handphone"
                cssClass="table-center"
              />
              <Column
                sortOrder="asc"
                width="auto"
                caption="Desa"
                dataField="desa"
                cssClass="table-center"
              ></Column>
              <Column width="auto" caption="Data Masuk" alignment="center">
                <Column
                  sortOrder="asc"
                  width={150}
                  caption="Target"
                  dataField="target"
                />
                <Column
                  sortOrder="asc"
                  width={150}
                  caption="Hari Ini"
                  dataField="hariIni"
                />
                <Column
                  sortOrder="asc"
                  width={150}
                  caption="Total (Angka)"
                  dataField="totalAngka"
                />
                <Column
                  sortOrder="asc"
                  width={150}
                  caption="Total (%)"
                  dataField="totalPersen"
                  cellRender={BarCell}
                />
              </Column>
              <Paging defaultPageSize={10} />
              <Scrolling mode="virtual" />
              <Sorting mode="multiple" showSortIndexes={false} />
            </DataGrid>
          </Grid>
        </Grid>
        {/* <Copyright sx={{ pt: 4 }} /> */}
      </Container>
    </Box>
  );
}
