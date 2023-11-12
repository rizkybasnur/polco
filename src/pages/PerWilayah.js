import { Box, Button, Container, Grid, Toolbar } from "@mui/material";
import * as React from "react";
import Filter from "../components/common/Filter";
import DataGrid, {
  Column,
  Pager,
  Paging,
  Sorting,
} from "devextreme-react/data-grid";
import ProgressBar from "../components/ProgressBar";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import api from "../api/axios";

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

function Chip({ title }) {
  return (
    <div
      className="chip-text cursor-pointer choco"
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
  const [isDetail, setIsDetail] = React.useState();
  const allowedPageSizes = [5, 10, "all"];

  // eslint-disable-next-line
  const [data, setData] = React.useState();
  React.useEffect(() => {
    api
      .get(`/web/wilayah`)
      .then((res) => {
        const updateData = res.data.data.map((item, index) => ({
          ...item,
          nomor: index + 1,
        }));
        setData(updateData);
      })
      .catch((error) => {
        console.log(error);
        // Handle errors
      });
  }, []);

  // eslint-disable-next-line
  const [dataDetail, setDataDetail] = React.useState([
    {
      nomor: "1",
      provinsi: "Nancy Davolio",
      kabupaten: "Wiyung ",
      kecamatan: "50",
      kelurahanDesa: "50",
      relawan: "50",
      target: "50",
      angka: "50",
      total: "20",
    },
    {
      nomor: "2",
      provinsi: "Nancy Davolio",
      kabupaten: "Dupak ",
      kecamatan: "50",
      kelurahanDesa: "50",
      relawan: "50",
      target: "50",
      angka: "50",
      total: "30",
    },
    {
      nomor: "3",
      provinsi: "Nancy Davolio",
      kabupaten: "Perak ",
      kecamatan: "50",
      kelurahanDesa: "50",
      relawan: "50",
      target: "50",
      angka: "50",
      total: "40",
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

  // eslint-disable-next-line
  const [open, setOpen] = React.useState(false);

  const DiffCell = (e) => {
    return (
      <div
        onClick={() => {
          if (!isDetail) {
            setIsDetail(true);
          }
        }}
      >
        <Chip id="1" title={e.value} />
      </div>
    );
  };

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
            {!isDetail ? (
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
                  dataField="nomor"
                  width="auto"
                  cssClass="table-center"
                />
                <Column
                  sortOrder="asc"
                  width="auto"
                  caption="Provinsi"
                  dataField="provinsi"
                  cssClass="table-center"
                />
                <Column
                  sortOrder="asc"
                  caption="Kabupaten/Kota"
                  dataField="kabupaten"
                  cssClass="table-center"
                  cellRender={DiffCell}
                />
                <Column
                  sortOrder="asc"
                  width="auto"
                  caption="Kecamatan"
                  dataField="kecamatan"
                  cssClass="table-center"
                />
                <Column
                  sortOrder="asc"
                  width="auto"
                  caption="Kelurahan/Desa"
                  dataField="kelurahanDesa"
                  cssClass="table-center"
                />
                <Column
                  sortOrder="asc"
                  width="auto"
                  caption="Relawan"
                  dataField="relawan"
                  cssClass="table-center"
                />
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
                    caption="Angka"
                    dataField="angka"
                  />
                  <Column
                    sortOrder="asc"
                    width={150}
                    caption="Total"
                    dataField="total"
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
                {/* <Scrolling mode="virtual" /> */}
                <Sorting mode="multiple" showSortIndexes={false} />
              </DataGrid>
            ) : (
              <DataGrid
                showBorders={true}
                dataSource={dataDetail}
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
                  dataField="nomor"
                  width="auto"
                  cssClass="table-center"
                />
                <Column
                  sortOrder="asc"
                  width="auto"
                  caption="Provinsi"
                  dataField="provinsi"
                  cssClass="table-center"
                />
                <Column
                  sortOrder="asc"
                  caption="Kabupaten/Kota"
                  dataField="kabupaten"
                  cssClass="table-center"
                  cellRender={DiffCell}
                />
                <Column
                  sortOrder="asc"
                  width="auto"
                  caption="Kecamatan"
                  dataField="kecamatan"
                  cssClass="table-center"
                />
                <Column
                  sortOrder="asc"
                  width="auto"
                  caption="Kelurahan/Desa"
                  dataField="kelurahanDesa"
                  cssClass="table-center"
                />
                <Column
                  sortOrder="asc"
                  width="auto"
                  caption="Relawan"
                  dataField="relawan"
                  cssClass="table-center"
                />
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
                    caption="Angka"
                    dataField="angka"
                  />
                  <Column
                    sortOrder="asc"
                    width={150}
                    caption="Total"
                    dataField="total"
                    cellRender={BarCell}
                  />
                </Column>
                <Paging defaultPageSize={10} />
                <Pager
                  visible={true}
                  allowedPageSizes={allowedPageSizes}
                  showPageSizeSelector={true}
                  showInfo={true}
                  showNavigationButtons={true}
                />
                {/* <Scrolling mode="virtual" /> */}
                <Sorting mode="multiple" showSortIndexes={false} />
              </DataGrid>
            )}
          </Grid>
        </Grid>
        {isDetail && (
          <div
            style={{ display: "flex", justifyContent: "end", marginTop: 16 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setIsDetail(false);
              }}
            >
              <ArrowLeftIcon style={{ marginRight: 4 }} fontSize="small" /> Back
            </Button>
          </div>
        )}
        {/* <Copyright sx={{ pt: 4 }} /> */}
      </Container>
    </Box>
  );
}
