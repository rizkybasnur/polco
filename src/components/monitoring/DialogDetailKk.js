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
import api from "../../api/axios";

function DialogRt({ open, onClose, item }) {
  // eslint-disable-next-line
  const [data, setData] = React.useState();
  const [surveyor, setsurveyor] = React.useState();

  React.useEffect(() => {
    if (item) {
      console.log(item);
      const fetchData = async () => {
        try {
          const response = await api.post(`/web/data_kk_by_rt`, {
            kode_event: item.kodeEvent,
            idRt: item.idRt,
            idRw: item.idRw,
          });
          const responseData = response.data.data;

          // Mapping the surveyor data and assigning numbers
          if (responseData.data_kk) {
            const updateData = responseData.data_kk.map((item, index) => ({
              ...item,
              nomor: index + 1,
            }));
            setsurveyor(updateData);
          }

          // Setting the data received
          if (responseData.suveyor) {
            setData(responseData.suveyor);
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

  const column = [
    {
      caption: "no",
      dataField: "nomor",
      width: 100,
    },
    {
      caption: "nama",
      dataField: "nama",
      width: 100,
    },
    {
      caption: "terpilih",
      dataField: "isTerpilih",
      width: 100,
    },
    {
      caption: "kk terpilih",
      dataField: "isTerpilih",
      width: 210,
    },
    {
      caption: "keterangan",
      dataField: "keterangan",
      width: 210,
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
          <TableManual title="DAFTAR KK" data={data} />
        </Paper>
        <Paper elevation={0} sx={{ p: 0, mt: 4, width: "100%" }}>
          <Table
            datas={surveyor}
            column={column}
            paging={true}
            scrolling={true}
            sorting={true}
          />
        </Paper>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        {/* <Pdf /> */}

        {/* <Button
          variant="contained"
          onClick={() => {
            setOpenAcak(true);
          }}
          color="blue"
          style={{ borderRadius: 50 }}
        >
          <ShuffleIcon style={{ marginRight: 4 }} /> Angka Acak
        </Button> */}

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
