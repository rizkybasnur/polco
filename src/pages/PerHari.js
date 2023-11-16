import { Box, Container, Grid, Toolbar } from "@mui/material";
import * as React from "react";
// import Filter from "../components/common/Filter";
import "devextreme/dist/css/dx.light.css";
import ProgressBar from "../components/ProgressBar";
import {
  Column,
  DataGrid,
  Pager,
  Paging,
  Sorting,
} from "devextreme-react/data-grid";
import api from "../api/axios";

export default function Tes() {
  const allowedPageSizes = [5, 10, "all"];

  // eslint-disable-next-line
  const [data, setData] = React.useState();
  React.useEffect(() => {
    api
      .get(`/web/per_day`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        // Handle errors
      });
  }, []);

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
          {/* <Grid item xs={12}>
            <Filter />
          </Grid> */}
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
                dataField="no_telp"
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
                  dataField="today"
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
              {data && data.length > 5 && (
                <div>
                  <Paging defaultPageSize={5} />
                  <Pager
                    visible={true}
                    allowedPageSizes={allowedPageSizes}
                    showPageSizeSelector={true}
                    showInfo={true}
                    showNavigationButtons={true}
                  />
                </div>
              )}
              <Sorting mode="multiple" showSortIndexes={false} />
            </DataGrid>
          </Grid>
        </Grid>
        {/* <Copyright sx={{ pt: 4 }} /> */}
      </Container>
    </Box>
  );
}
