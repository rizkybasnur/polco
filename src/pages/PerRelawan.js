import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import Filter from "../components/common/Filter";
import { DataGrid } from "devextreme-react";
import {
  Column,
  Paging,
  Scrolling,
  SearchPanel,
  Sorting,
} from "devextreme-react/data-grid";
import ProgressBar from "../components/ProgressBar";
import CloseIcon from "@mui/icons-material/Close";
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

function Chip({ title }) {
  return (
    <div
      className="chip-text cursor-pointer blu"
      style={{
        borderRadius: 16,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 2,
        paddingBottom: 2,
        width: "fit-content",
        display: "flex",
        alignItems: "center",
      }}
    >
      {title}
    </div>
  );
}

export default function Tes() {
  // eslint-disable-next-line
  const [data, setData] = React.useState();
  React.useEffect(() => {
    api
      .get(`/web/relawan`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        // Handle errors
      });
  }, []);
  //   [
  //   {
  //     nomor: "1",
  //     user: "Nancy Davolio",
  //     nama: "Sales Representative",
  //     handphone: "50",
  //     desa: "50",
  //     target: "50",
  //     hariIni: "50",
  //     totalAngka: "50",
  //     totalPersen: "50",
  //   },
  //   {
  //     nomor: "2",
  //     user: "Rubia",
  //     nama: "Sales Representative",
  //     handphone: "50",
  //     desa: "50",
  //     target: "50",
  //     hariIni: "50",
  //     totalAngka: "50",
  //     totalPersen: "75",
  //   },
  //   {
  //     nomor: "3",
  //     user: "Sho",
  //     nama: "Sales Representative",
  //     handphone: "50",
  //     desa: "50",
  //     target: "50",
  //     hariIni: "50",
  //     totalAngka: "50",
  //     totalPersen: "20",
  //   },
  // ]);

  // eslint-disable-next-line
  const [gridInstance, setGridInstance] = React.useState(null);

  React.useEffect(() => {
    if (gridInstance) {
      gridInstance.refresh();
    }
    // eslint-disable-next-line
  }, [data]);

  const DiffCell = (e) => {
    return (
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        <Chip id="1" title={e.value} />
      </div>
    );
  };

  const BarCell = (cellData) => {
    return <ProgressBar completed={cellData.value} />;
  };

  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(false);
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
                cellRender={DiffCell}
              />
              <Column
                sortOrder="asc"
                width="auto"
                caption="Target Data"
                dataField="target"
                cssClass="table-center"
              />

              <Column
                sortOrder="asc"
                width="auto"
                caption="Data Masuk (Angka)"
                dataField="totalAngka"
                cssClass="table-center"
              />

              <Column
                sortOrder="asc"
                width="auto"
                caption="Data Masuk (%)"
                dataField="totalPersen"
                cssClass="table-center"
                cellRender={BarCell}
              />
              <Paging defaultPageSize={10} />
              <Scrolling mode="virtual" />
              <Sorting mode="multiple" showSortIndexes={false} />
            </DataGrid>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>

      <Dialog
        open={open}
        onClose={onClose}
        fullWidth={true}
        maxWidth="xl"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              backgroundColor: "#241A0F",
            },
          },
        }}
      >
        <DialogTitle color="primary">Detail Per Wilayah</DialogTitle>
        <DialogContent>
          <Paper elevation={0} sx={{ p: 0 }}>
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
              <SearchPanel visible={true} placeholder="Search..." />

              <Column
                sortOrder="asc"
                caption="Nomor"
                width="auto"
                cssClass="table-center"
                calculateCellValue={(rowData) => {
                  return data.indexOf(rowData) + 1;
                }}
              ></Column>
              <Column
                sortOrder="asc"
                width="auto"
                caption="User"
                dataField="user"
                cssClass="table-center"
              ></Column>
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
                cellRender={DiffCell}
              />
              <Column
                sortOrder="asc"
                width="auto"
                caption="Target Data"
                dataField="target"
                cssClass="table-center"
              />

              <Column
                sortOrder="asc"
                width="auto"
                caption="Data Masuk (Angka)"
                dataField="totalAngka"
                cssClass="table-center"
              />

              <Column
                sortOrder="asc"
                width="auto"
                caption="Data Masuk (%)"
                dataField="totalPersen"
                cssClass="table-center"
              />
              <Paging defaultPageSize={10} />
              <Scrolling mode="virtual" />
              <Sorting mode="multiple" showSortIndexes={false} />
            </DataGrid>
          </Paper>
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "center", mb: 2 }}
        >
          <Button
            variant="contained"
            onClick={onClose}
            color="error"
            style={{ borderRadius: 50 }}
          >
            <CloseIcon style={{ marginRight: 4 }} /> Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
