import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
} from "@mui/material";
import Table from "../common/Table";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import api from "../../api/axios";

function DialogRt({ open, onClose, rt }) {
  const [data, setData] = React.useState([]);
  // eslint-disable-next-line
  const [dataRtRw, setDataRtRw] = React.useState([
    {
      latitude: "1",
      longitude: "1",
      rute: "1",
      dokumentasi:
        "https://fastly.picsum.photos/id/568/200/300.jpg?hmac=vQmkZRQt1uS-LMo2VtIQ7fn08mmx8Fz3Yy3lql5wkzM",
      ruteLink: "1",
    },
    {
      latitude: "2",
      longitude: "1",
      rute: "1",
      dokumentasi:
        "https://fastly.picsum.photos/id/469/200/300.jpg?hmac=XkjIV9jof2hkk4eUpQpbQVMBiSTfqdlJxIdlcIdEM6Q",
      ruteLink: "1",
    },
    {
      latitude: "3",
      longitude: "1",
      rw: "1",
      rute: "1",
      dokumentasi:
        "https://fastly.picsum.photos/id/627/200/300.jpg?hmac=C6cEU431ILuZjftVFQ1RsBlFYS52ym9f2KZPSOfH-R4",
      ruteLink: "1",
    },
  ]);
  // eslint-disable-next-line
  const [dataKk, setDataKk] = React.useState([]);
  // eslint-disable-next-line
  const [dataKeluarga, setDataKeluarga] = React.useState([]);
  const columnGeo = [
    {
      caption: "Provinsi",
      dataField: "provinces",
      width: 215,
    },
    {
      caption: "kabupaten/Kota",
      dataField: "kabupaten",
      width: 215,
    },
    {
      caption: "kecamatan",
      dataField: "kecamatan",
      width: 215,
    },
    {
      caption: "kelurahan/Desa",
      dataField: "kelurahan",
      width: 215,
    },
    {
      caption: "nama Surveyor",
      dataField: "nama",
      width: 215,
    },
    {
      caption: "no_telp",
      dataField: "no_telp",
      width: 215,
    },
  ];
  const columnRtRw = [
    {
      caption: "latitude",
      dataField: "latitude",
      width: 250,
    },
    {
      caption: "longitude",
      dataField: "longitude",
      width: 250,
    },
    {
      caption: "Rute dari Data RT ke Data KK",
      dataField: "rute",
      width: 250,
    },
    {
      caption: "dokumentasi",
      dataField: "fotoDokumentasi",
      width: 250,
      // custom: "photo",
    },
    {
      caption: "rute link",
      dataField: "ruteLink",
      width: 250,
      custom: "rute",
    },
  ];
  const columnKk = [
    {
      caption: "rt",
      dataField: "rt",
    },
    {
      caption: "rw",
      dataField: "rw",
      width: 100,
    },

    {
      caption: "latitude",
      dataField: "startLat",
      width: 170,
    },
    {
      caption: "longitude",
      dataField: "startLon",
      width: 170,
    },
    {
      caption: "address",
      dataField: "address",
      width: 170,
    },
    {
      caption: "radius",
      dataField: "radius",
      width: 170,
    },
    {
      caption: "dokumentasi",
      dataField: "fotoDokumentasi",
      width: 170,
      // custom: "photo",
    },
    {
      caption: "rute",
      dataField: "rute",
      width: 170,
      custom: "rute",
    },
  ];
  const columnKeluarga = [
    {
      caption: "no",
      dataField: "nomor",
    },
    {
      caption: "rt Terpilih",
      dataField: "terpilih",
    },
    {
      caption: "rt",
      dataField: "idRt",
    },
    {
      caption: "rw",
      dataField: "idRw",
    },
    {
      caption: "kk Terpilih",
      dataField: "kkTerpilih",
    },
    {
      caption: "status",
      dataField: "statusKk",
    },
    {
      caption: "kk",
      dataField: "kk",
    },
    {
      caption: "responden",
      dataField: "responden",
    },
    {
      caption: "foto Keluarga",
      dataField: "fotoKk",
    },
    {
      caption: "foto Wawancara",
      dataField: "fotoWawancara",
    },
    {
      caption: "Rute dari Responden Ke Wawancara",
      dataField: "rute",
      custom: "rute",
    },
  ];

  React.useEffect(() => {
    if (rt !== "") {
      const fetchData = async () => {
        try {
          const response = await api.post(`/web/geotaging`, {
            kode_event: rt,
          });
          const responseData = response.data.data;

          if (responseData.geotag) {
            setData([responseData.geotag]);
          }

          if (responseData.list_kk) {
            setDataKk(responseData.list_kk);
          }

          if (responseData?.list_wawancara) {
            const updateData = responseData.list_wawancara.map(
              (item, index) => ({
                ...item,
                nomor: index + 1,
              })
            );
            setDataKeluarga(updateData);
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
    // eslint-disable-next-line
  }, []);

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
      <DialogTitle color="primary">Data Monitoring</DialogTitle>
      <DialogContent>
        <Paper elevation={0} sx={{ p: 0, width: "100%" }}>
          <Table
            datas={data}
            column={columnGeo}
            paging={true}
            scrolling={true}
            sorting={true}
            header={true}
            title="Geotag Foto"
          />
        </Paper>
        <Paper elevation={0} sx={{ p: 0, mt: 4, width: "100%" }}>
          <Table
            datas={dataRtRw}
            column={columnRtRw}
            paging={true}
            scrolling={true}
            sorting={true}
            header={true}
            title="Data RT RW"
          />
        </Paper>
        <Paper elevation={0} sx={{ p: 0, mt: 4, width: "100%" }}>
          <Table
            datas={dataKk}
            column={columnKk}
            paging={true}
            scrolling={true}
            sorting={true}
            header={true}
            title="Data KK"
          />
        </Paper>
        <Paper elevation={0} sx={{ p: 0, mt: 4, width: "100%" }}>
          <Table
            datas={dataKeluarga}
            column={columnKeluarga}
            paging={true}
            scrolling={true}
            sorting={true}
            header={true}
            title="DATA KELUARGA & WAWANCARA"
          />
        </Paper>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
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

export default DialogRt;
