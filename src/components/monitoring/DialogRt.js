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
import ShuffleIcon from "@mui/icons-material/Shuffle";
// import Pdf from "../common/PdfExample";
import api from "../../api/axios";

function DialogRt({ open, onClose, rt }) {
  // eslint-disable-next-line
  const [data, setData] = React.useState();
  const [surveyor, setsurveyor] = React.useState();

  React.useEffect(() => {
    if (rt !== "") {
      const fetchData = async () => {
        try {
          const response = await api.post(`/web/data_rt`, { kode_event: rt });
          const responseData = response.data.data;

          // Mapping the surveyor data and assigning numbers
          if (responseData.data_rt) {
            const updateData = responseData.data_rt.map((item, index) => ({
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
      caption: "rw",
      dataField: "id_rw",
      width: 100,
    },
    {
      caption: "rt",
      dataField: "id_rt",
      width: 100,
    },
    {
      caption: "keterangan",
      dataField: "keterangan",
      width: 210,
    },
    // {
    //   caption: "ganti rt terpilih",
    //   dataField: "isTerpilih",
    //   width: 210,
    //   custom: "select",
    // },
  ];

  const handleClose = () => {
    onClose();
  };

  const [openAcak, setOpenAcak] = React.useState(false);

  const onCloseAcak = () => {
    setOpenAcak(false);
  };

  const toggleDialogAcak = () => {
    setOpenAcak(true);
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
          <TableManual title="DAFTAR RT" data={data} />
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

        <Button
          variant="contained"
          onClick={() => {
            toggleDialogAcak();
          }}
          // color="blue"
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
        >
          <CloseIcon style={{ marginRight: 4 }} /> Close
        </Button>
      </DialogActions>
      {openAcak && (
        <DialogAcak open={openAcak} onClose={onCloseAcak} kode={rt} />
      )}
    </Dialog>
  );
}

export default DialogRt;
