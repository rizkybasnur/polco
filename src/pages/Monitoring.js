import { Box, Container, Grid, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import Filter from "../components/common/Filter";
import Chip from "../components/common/Chip";
import DialogKk from "../components/monitoring/DialogKk";
import DialogDataMasuk from "../components/monitoring/DialogDataMasuk";
import { DataGrid } from "devextreme-react";
import {
  Column,
  Paging,
  Scrolling,
  Selection,
  Sorting,
} from "devextreme-react/data-grid";
import DialogRt from "../components/monitoring/DialogRt";
import DialogMap from "../components/monitoring/DialogMap";

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
  const [data, setData] = React.useState([
    {
      nomor: "2",
      nama: "Sales Representative",
      handphone: "50",
      rute: "50",
      daftarRt: "1",
      kk: "2",
      dataMasuk: "50",
    },
    {
      nomor: "2",
      nama: "Sales Representative",
      handphone: "50",
      rute: "50",
      daftarRt: "2",
      kk: "1",
      dataMasuk: "50",
    },
    {
      nomor: "2",
      nama: "Sales Representative",
      handphone: "50",
      rute: "50",
      daftarRt: "3",
      kk: "2",
      dataMasuk: "50",
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

  const DiffCell = (e) => {
    return (
      <div onClick={setOpenDataMasuk}>
        <Chip id="1" title={e.value} />
      </div>
    );
  };

  const MapCell = (e) => {
    return (
      <div onClick={setOpenMap}>
        <Chip id="1" title="Maps" icon={true} />
      </div>
    );
  };

  const rtCell = (e) => {
    return (
      <div onClick={setOpenRt}>
        {e.value === "1" ? (
          <Chip id="1" title="Completed" />
        ) : (
          <Chip id="2" title="Progress" />
        )}
      </div>
    );
  };

  const kkCell = (e) => {
    return (
      <div onClick={setOpenKk}>
        {e.value === "1" ? (
          <Chip id="1" title="Completed" />
        ) : (
          <Chip id="2" title="Progress" />
        )}
      </div>
    );
  };

  const [openKk, setOpenKk] = React.useState(false);

  const onCloseKk = () => {
    setOpenKk(false);
  };

  const [openRt, setOpenRt] = React.useState(false);

  const onCloseRt = () => {
    setOpenRt(false);
  };

  const [openMap, setOpenMap] = React.useState(false);

  const onCloseMap = () => {
    setOpenMap(false);
  };

  const [openDataMasuk, setOpenDataMasuk] = React.useState(false);

  const onCloseDataMasuk = () => {
    setOpenDataMasuk(false);
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
                caption="Nama"
                dataField="nama"
                cssClass="table-center"
              />
              <Column
                sortOrder="asc"
                caption="Handphone"
                dataField="handphone"
                cssClass="table-center"
              />
              <Column
                sortOrder="asc"
                caption="Rute"
                dataField="rute"
                cssClass="table-center"
                cellRender={MapCell}
              />
              <Column
                sortOrder="asc"
                caption="Daftar Rt"
                dataField="daftarRt"
                cssClass="table-center"
                cellRender={rtCell}
              />
              <Column
                sortOrder="asc"
                caption="KK"
                dataField="kk"
                cssClass="table-center"
                cellRender={kkCell}
              />

              <Column
                sortOrder="asc"
                caption="Data Masuk"
                dataField="dataMasuk"
                cssClass="table-center"
                cellRender={DiffCell}
              />
              <Selection mode="single" />
              <Paging defaultPageSize={10} />
              <Scrolling mode="virtual" />
              <Sorting mode="multiple" showSortIndexes={false} />
            </DataGrid>
          </Grid>
        </Grid>
        <DialogMap open={openMap} onClose={onCloseMap} />
        <DialogKk open={openKk} onClose={onCloseKk} />
        <DialogDataMasuk open={openDataMasuk} onClose={onCloseDataMasuk} />
        <DialogRt open={openRt} onClose={onCloseRt} />
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}
