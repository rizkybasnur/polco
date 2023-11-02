import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
} from "@mui/material";
import TableManual from "../common/TableManual";
import Table from "../common/Table";
import React from "react";
import DialogAcak from "./DialogAcak";
import CloseIcon from "@mui/icons-material/Close";
import PrintIcon from "@mui/icons-material/Print";
import ShuffleIcon from "@mui/icons-material/Shuffle";
function DialogRt({ open, onClose }) {
  // eslint-disable-next-line
  const [data, setData] = React.useState([
    {
      nomor: "1",
      rw: "1",
      rt: "1",
      keterangan: "1",
      gantiRtTerpilih: "1",
    },
    {
      nomor: "1",
      rw: "1",
      rt: "1",
      keterangan: "1",
      gantiRtTerpilih: "2",
    },
    {
      nomor: "2",
      rw: "1",
      rt: "1",
      keterangan: "1",
      gantiRtTerpilih: "2",
    },
  ]);

  const column = [
    {
      caption: "no",
      dataField: "nomor",
      width: 100,
    },
    {
      caption: "rw",
      dataField: "rw",
      width: 100,
    },
    {
      caption: "rt",
      dataField: "rt",
      width: 100,
    },
    {
      caption: "keterangan",
      dataField: "keterangan",
      width: 210,
    },
    {
      caption: "ganti rt terpilih",
      dataField: "gantiRtTerpilih",
      width: 210,
      custom: "select",
    },
  ];

  const handleClose = () => {
    onClose();
  };

  const [openAcak, setOpenAcak] = React.useState(false);

  const onCloseAcak = () => {
    setOpenAcak(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "768px",
            backgroundColor: "#241A0F",
          },
        },
      }}
    >
      <DialogContent>
        <Paper elevation={0} sx={{ p: 0 }}>
          <TableManual title="ganti rt terpilih" />
        </Paper>
        <Paper elevation={0} sx={{ p: 0, mt: 4, width: "100%" }}>
          <Table
            datas={data}
            column={column}
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
          <PrintIcon style={{ marginRight: 4 }} /> Print
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setOpenAcak(true);
          }}
          color="blue"
          style={{ borderRadius: 50 }}
        >
          <ShuffleIcon style={{ marginRight: 4 }} /> Angka Acak
        </Button>

        <Button
          variant="contained"
          onClick={onClose}
          color="error"
          style={{ borderRadius: 50 }}
        >
          <CloseIcon style={{ marginRight: 4 }} /> Close
        </Button>
      </DialogActions>
      <DialogAcak open={openAcak} onClose={onCloseAcak} />
    </Dialog>
  );
}

export default DialogRt;
