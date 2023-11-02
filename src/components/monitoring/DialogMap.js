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

function DialogRt({ open, onClose }) {
  // eslint-disable-next-line
  const [dataGeo, setDataGeo] = React.useState([
    {
      provinsi: "1",
      kabupatenKota: "1",
      kecamatan: "1",
      kelurahanDesa: "1",
      namaSurveyor: "1",
      handphone: "1",
    },
    {
      provinsi: "2",
      kabupatenKota: "1",
      kecamatan: "1",
      kelurahanDesa: "1",
      namaSurveyor: "1",
      handphone: "1",
    },
    {
      provinsi: "3",
      kabupatenKota: "1",
      kecamatan: "1",
      kelurahanDesa: "1",
      namaSurveyor: "1",
      handphone: "1",
    },
  ]);

  const columnGeo = [
    {
      caption: "Provinsi",
      dataField: "provinsi",
      width: 215,
    },
    {
      caption: "kabupaten/Kota",
      dataField: "kabupatenKota",
      width: 215,
    },
    {
      caption: "kecamatan",
      dataField: "kecamatan",
      width: 215,
    },
    {
      caption: "kelurahan/Desa",
      dataField: "kelurahanDesa",
      width: 215,
    },
    {
      caption: "nama Surveyor",
      dataField: "namaSurveyor",
      width: 215,
    },
    {
      caption: "handphone",
      dataField: "handphone",
      width: 215,
    },
  ];

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
      dataField: "dokumentasi",
      width: 250,
      custom: "photo",
    },
    {
      caption: "rute link",
      dataField: "ruteLink",
      width: 250,
      custom: "rute",
    },
  ];

  // eslint-disable-next-line
  const [dataKk, setDataKk] = React.useState([
    {
      rt: "1",
      rw: "1",
      latitude: "1",
      longitude: "1",
      address: "1",
      radius: "1",
      dokumentasi:
        "https://fastly.picsum.photos/id/568/200/300.jpg?hmac=vQmkZRQt1uS-LMo2VtIQ7fn08mmx8Fz3Yy3lql5wkzM",
      rute: "1",
    },
    {
      rt: "2",
      rw: "1",
      latitude: "1",
      longitude: "1",
      address: "1",
      radius: "1",
      dokumentasi:
        "https://fastly.picsum.photos/id/469/200/300.jpg?hmac=XkjIV9jof2hkk4eUpQpbQVMBiSTfqdlJxIdlcIdEM6Q",
      rute: "1",
    },
    {
      rt: "3",
      rw: "1",
      latitude: "1",
      longitude: "1",
      address: "1",
      radius: "1",
      dokumentasi:
        "https://fastly.picsum.photos/id/627/200/300.jpg?hmac=C6cEU431ILuZjftVFQ1RsBlFYS52ym9f2KZPSOfH-R4",
      rute: "1",
    },
  ]);

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
      dataField: "latitude",
      width: 170,
    },
    {
      caption: "longitude",
      dataField: "longitude",
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
      dataField: "dokumentasi",
      width: 170,
      custom: "photo",
    },
    {
      caption: "rute",
      dataField: "rute",
      width: 170,
      custom: "rute",
    },
  ];

  // eslint-disable-next-line
  const [dataKeluarga, setDataKeluarga] = React.useState([
    {
      nomor: "1",
      rtTerpilih: "1",
      rt: "1",
      rw: "1",
      kkTerpilih: "1",
      status: "1",
      kk: "1",
      responden: "1",
      fotoKeluarga: "1",
      fotoWawancara: "1",
      rute: "1",
    },
    {
      nomor: "2",
      rtTerpilih: "1",
      rt: "1",
      rw: "1",
      kkTerpilih: "1",
      status: "1",
      kk: "1",
      responden: "1",
      fotoKeluarga: "1",
      fotoWawancara: "1",
      rute: "1",
    },
    {
      nomor: "3",
      rtTerpilih: "1",
      rt: "1",
      rw: "1",
      kkTerpilih: "1",
      status: "1",
      kk: "1",
      responden: "1",
      fotoKeluarga: "1",
      fotoWawancara: "1",
      rute: "1",
    },
  ]);

  const columnKeluarga = [
    {
      caption: "no",
      dataField: "nomor",
    },
    {
      caption: "rt Terpilih",
      dataField: "rtTerpilih",
    },
    {
      caption: "rt",
      dataField: "rt",
    },
    {
      caption: "rw",
      dataField: "rw",
    },
    {
      caption: "kk Terpilih",
      dataField: "kkTerpilih",
    },
    {
      caption: "status",
      dataField: "status",
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
      dataField: "fotoKeluarga",
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
            backgroundColor: "#241A0F", // Set your width here
          },
        },
      }}
    >
      <DialogTitle color="primary">Data Monitoring</DialogTitle>
      <DialogContent>
        <Paper elevation={0} sx={{ p: 0, width: "100%" }}>
          <Table
            datas={dataGeo}
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
