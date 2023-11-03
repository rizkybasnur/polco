import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
} from "@mui/material";
import TableAngkaAcak from "../common/TableAngkaAcak";
import TableManual from "../common/TableManual";
import CloseIcon from "@mui/icons-material/Close";
import Pdf from '../common/PdfExample'

function DialogAcak({ open, onClose }) {
  const handleClose = () => {
    onClose();
  };

  const data = [
    [
      { value: "1", id: 1 },
      { value: "2", id: 1 },
      { value: "3", id: 3 },
      { value: "1", id: 1 },
      { value: "2", id: 1 },
      { value: "3", id: 3 },
      { value: "1", id: 2 },
      { value: "2", id: 2 },
      { value: "3", id: 3 },
    ],
    [
      { value: "1", id: 1 },
      { value: "2", id: 1 },
      { value: "3", id: 3 },
      { value: "1", id: 1 },
      { value: "2", id: 1 },
      { value: "3", id: 3 },
      { value: "1", id: 2 },
      { value: "2", id: 2 },
      { value: "3", id: 3 },
    ],
    [
      { value: "1", id: 1 },
      { value: "2", id: 1 },
      { value: "3", id: 3 },
      { value: "1", id: 1 },
      { value: "2", id: 1 },
      { value: "3", id: 3 },
      { value: "1", id: 2 },
      { value: "2", id: 2 },
      { value: "3", id: 3 },
    ],
  ];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "1280px", // Set your width here
            backgroundColor: "#241A0F",
          },
        },
      }}
    >
      <DialogContent>
        <Paper elevation={0} sx={{ p: 0 }}>
          <TableManual title="ANGKA ACAK" />
        </Paper>
        <Paper elevation={0} sx={{ p: 0, mt: 4 }}>
          <TableAngkaAcak
            title="LEMBAR ANGKA ACAK UNTUK MEMILIH RT"
            data={data}
          />
        </Paper>
        <Paper elevation={0} sx={{ p: 0, mt: 4 }}>
          <TableAngkaAcak
            title="LEMBAR ANGKA ACAK UNTUK MEMILIH KK"
            data={data}
          />
        </Paper>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}
      >
       <Pdf/>
        <Button
          variant="contained"
          onClick={onClose}
          color="error"
          style={{ borderRadius: 50 }}
        >
          <CloseIcon style={{ marginRight: 4 }} /> Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogAcak;
