import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  // Table,
  // TableBody,
  // TableCell,
  // TableContainer,
  // TableRow,
} from "@mui/material";
// import Chip from "./Chip";
import Table from "../common/Table";
// import refresh from "../../assets/refresh.svg";
import TableBa from "../common/TableBa";
import CloseIcon from "@mui/icons-material/Close";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import Pdf from "../common/PdfExample";
import api from "../../api/axios";

function DialogDataMasuk({ open, onClose, rt }) {
  const [data, setData] = React.useState([]);
  const [surveyor, setsurveyor] = React.useState([]);

  React.useEffect(() => {
    if (rt !== "") {
      const fetchData = async () => {
        try {
          const response = await api.post(`/web/berita_acara`, {
            kode_event: rt,
          });
          const responseData = response.data.data;

          if (responseData.list_row) {
            const updateData = responseData.list_row.map((item, index) => ({
              ...item,
              nomor: index + 1,
            }));
            setData(updateData);
          }

          // Setting the data received
          if (responseData.suveyor) {
            setsurveyor(responseData.suveyor);
          }
        } catch (error) {
          console.log(error);
          // Handle errors
        }
      };

      fetchData(); // Trigger the data fetching
    }
    // eslint-disable-next-line
  }, []);
  // eslint-disable-next-line
  // const [dataGeo, setDataGeo] = React.useState([
  //   {
  //     no: "1",
  //     terpilih: "1",
  //     rtRw: "1",
  //     kkPengganti: "1",
  //     respondenAsli: "1",
  //     qcHasilWawancara: "1",
  //     verifikasi: "1",
  //   },
  //   {
  //     no: "1",
  //     terpilih: "1",
  //     rtRw: "1",
  //     kkPengganti: "1",
  //     respondenAsli: "1",
  //     qcHasilWawancara: "1",
  //     verifikasi: "1",
  //   },
  //   {
  //     no: "1",
  //     terpilih: "1",
  //     rtRw: "1",
  //     kkPengganti: "1",
  //     respondenAsli: "1",
  //     qcHasilWawancara: "1",
  //     verifikasi: "1",
  //   },
  // ]);

  const columnGeo = [
    {
      caption: "No",
      dataField: "no",
      width: "auto",
    },
    {
      caption: "Terpilih",
      dataField: "terpilih",
      width: 215,
    },
    {
      caption: "RT/RW",
      dataField: "rtRw",
      width: 215,
    },
    {
      caption: "Jumlah KK",
      dataField: "jumlahKk",
      width: 215,
    },
    {
      caption: "KK Terpilih",
      dataField: "kkTerpilih",
      width: 215,
    },
    {
      caption: "KK Pengganti",
      dataField: "kkPengganti",
      width: 215,
    },
    {
      caption: "Responden Asli",
      dataField: "respondedAsli",
      width: 215,
    },
    {
      caption: "Responden Pengganti",
      dataField: "respondedGanti",
      width: 215,
    },
    {
      caption: "alasan pergantian kk",
      dataField: "alasanGanti",
      width: 215,
    },
    {
      caption: "QC Hasil Wawancara",
      dataField: "qcHasilWawancara",
      width: 215,
      custom: "qc",
    },
    {
      caption: "Verifikasi",
      dataField: "verifikasi",
      width: 215,
      custom: "doneNot",
    },
  ];

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "1550px",
            backgroundColor: "#241A0F",
          },
        },
      }}
    >
      <DialogContent>
        <Paper elevation={0} sx={{ p: 0 }}>
          <TableBa title="BERITA ACARA KELURAHAN RT/RW" data={surveyor} />
        </Paper>
        <Paper elevation={0} sx={{ p: 0, mt: 4 }}>
          <Table
            datas={data}
            column={columnGeo}
            paging={true}
            scrolling={true}
            sorting={true}
          />
        </Paper>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Pdf />

        <Button
          variant="contained"
          // onClick={() => {
          //   setOpenAcak(true);
          // }}
          style={{ borderRadius: 50 }}
          sx={{
            backgroundColor: "#01A3F8",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#0285c9",
            },
          }}
        >
          <ShuffleIcon style={{ marginRight: 4 }} /> Angka Acak
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          color="error"
          style={{ borderRadius: 50 }}
          elevation={0}
        >
          <CloseIcon style={{ marginRight: 4 }} /> Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogDataMasuk;
