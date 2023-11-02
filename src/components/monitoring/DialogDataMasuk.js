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
import TableManual from "../common/TableManual";
import CloseIcon from "@mui/icons-material/Close";
import PrintIcon from "@mui/icons-material/Print";
import ShuffleIcon from "@mui/icons-material/Shuffle";

function DialogDataMasuk({ open, onClose }) {
  const [dataGeo, setDataGeo] = React.useState([
    {
      no: "1",
      terpilih: "1",
      rtRw: "1",
      kkPengganti: "1",
      respondenAsli: "1",
      qcHasilWawancara: "1",
      verifikasi: "1",
    },
    {
      no: "1",
      terpilih: "1",
      rtRw: "1",
      kkPengganti: "1",
      respondenAsli: "1",
      qcHasilWawancara: "1",
      verifikasi: "1",
    },
    {
      no: "1",
      terpilih: "1",
      rtRw: "1",
      kkPengganti: "1",
      respondenAsli: "1",
      qcHasilWawancara: "1",
      verifikasi: "1",
    },
  ]);

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
      caption: "KK Pengganti",
      dataField: "kkPengganti",
      width: 215,
    },
    {
      caption: "Responden Asli",
      dataField: "respondenAsli",
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
          <TableManual title="ganti rt terpilih" />
        </Paper>
        <Paper elevation={0} sx={{ p: 0, mt: 4 }}>
          <Table
            datas={dataGeo}
            column={columnGeo}
            paging={true}
            scrolling={true}
            sorting={true}
          />
        </Paper>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Button
          variant="contained"
          onClick={onClose}
          color="primary"
          style={{ borderRadius: 50 }}
        >
          <PrintIcon style={{ marginRight: 4 }} /> Pint
        </Button>
        <Button
          variant="contained"
          // onClick={() => {
          //   setOpenAcak(true);
          // }}
          style={{ borderRadius: 50 }}
          color="blue"
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
