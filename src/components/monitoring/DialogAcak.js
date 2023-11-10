import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
} from "@mui/material";
import TableAngkaAcak from "../common/TableAngkaAcak";
import TableAngkaAcakKk from "../common/TableAngkaAcakKk";
import TableManual from "../common/TableManual";
import CloseIcon from "@mui/icons-material/Close";
import Pdf from "../common/PdfExample";
import api from "../../api/axios";

function DialogAcak({ open, onClose, kode }) {
  const handleClose = () => {
    onClose();
  };

  // eslint-disable-next-line
  const [rt, setRt] = React.useState();
  // eslint-disable-next-line
  const [kk, setKk] = React.useState();
  // eslint-disable-next-line
  const [surveyor, setSurveyor] = React.useState();

  React.useEffect(() => {
    if (kode !== "") {
      const fetchData = async () => {
        try {
          const response = await api.post(`/web/angka_acak`, {
            kode_event: kode,
          });
          const responseData = response.data.data;
          console.log(responseData);
          // Mapping the surveyor data and assigning numbers
          // if (responseData.angka_rt) {
          //   const updateData = responseData.angka_rt.map((item, index) => ({
          //     ...item,
          //     nomor: index + 1,
          //   }));
          //   setRt(updateData);
          // }

          if (responseData.angka_rt) {
            setRt(responseData.angka_rt);
          }

          if (responseData.angka_kk) {
            setKk(responseData.angka_kk);
          }

          // Setting the data received
          if (responseData.suvetor) {
            setSurveyor(responseData.suvetor);
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

  // const data = [
  //   [
  //     { value: "1", id: 1 },
  //     { value: "2", id: 1 },
  //     { value: "3", id: 3 },
  //     { value: "1", id: 1 },
  //     { value: "2", id: 1 },
  //     { value: "3", id: 3 },
  //     { value: "1", id: 2 },
  //     { value: "2", id: 2 },
  //     { value: "3", id: 3 },
  //   ],
  //   [
  //     { value: "1", id: 1 },
  //     { value: "2", id: 1 },
  //     { value: "3", id: 3 },
  //     { value: "1", id: 1 },
  //     { value: "2", id: 1 },
  //     { value: "3", id: 3 },
  //     { value: "1", id: 2 },
  //     { value: "2", id: 2 },
  //     { value: "3", id: 3 },
  //   ],
  //   [
  //     { value: "1", id: 1 },
  //     { value: "2", id: 1 },
  //     { value: "3", id: 3 },
  //     { value: "1", id: 1 },
  //     { value: "2", id: 1 },
  //     { value: "3", id: 3 },
  //     { value: "1", id: 2 },
  //     { value: "2", id: 2 },
  //     { value: "3", id: 3 },
  //   ],
  // ];

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
          {surveyor && <TableManual title="ANGKA ACAK" data={surveyor} />}
        </Paper>
        <Paper elevation={0} sx={{ p: 0, mt: 4 }}>
          {rt && (
            <TableAngkaAcak
              title="LEMBAR ANGKA ACAK UNTUK MEMILIH RT"
              data={rt}
            />
          )}
        </Paper>
        <Paper elevation={0} sx={{ p: 0, mt: 4 }}>
          {kk && (
            <TableAngkaAcakKk
              title="LEMBAR ANGKA ACAK UNTUK MEMILIH KK"
              data={kk}
            />
          )}
        </Paper>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}
      >
        <Pdf />
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
