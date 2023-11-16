import ReactDOMServer from "react-dom/server";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import { Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

import "./pdf.css";

function App({ surveyor, data }) {
  const pdfJSX = () => {
    return (
      <div className="container">
        <table>
          <tr>
            <th colSpan="2">BERITA ACARA KELURAHAN & RT</th>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Nama Kegiatan</td>
            <td style={{ width: "70%" }}>{surveyor?.kegiatan}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Nama Surveyor</td>
            <td style={{ width: "70%" }}>{surveyor?.nama}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Waktu Survey</td>
            <td style={{ width: "70%" }}>{surveyor?.waktu}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Jumlah Responden</td>
            <td style={{ width: "70%" }}>{surveyor?.totalResponden}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Asli</td>
            <td style={{ width: "70%" }}>{surveyor?.totalAsli}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Pengganti</td>
            <td style={{ width: "70%" }}>{surveyor?.totalGanti}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Kelurahan / Desa</td>
            <td style={{ width: "70%" }}>{surveyor?.desa}</td>
          </tr>
        </table>
        <table style={{ borderTop: "none" }}>
          <tr>
            <th>No</th>
            <th>Terpilih</th>
            <th>RW / RT</th>
            <th>KK Terpilih</th>
            <th>KK Pengganti </th>
            <th>Responden Asli </th>
            <th>Responden Pengganti</th>
            <th>Alasan Pergantian</th>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.nomor}</td>
              <td>{item.terpilih}</td>
              <td>{item.idRt + "/" + item.idRw}</td>
              <td>{item.kkTerpilih}</td>
              <td>{item.kkPengganti}</td>
              <td>{item.respondedAsli}</td>
              <td>{item.respondedGanti}</td>
              <td>{item.alasanGanti}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  };

  const printHandler = () => {
    const printElement = ReactDOMServer.renderToString(pdfJSX());
    // const printElement = pdfJSX();

    html2pdf().from(printElement).output("dataurlnewwindow");
  };

  return (
    <div className="App">
      <Button
        variant="contained"
        //   onClick={onClose}
        color="primary"
        style={{ borderRadius: 50 }}
        onClick={printHandler}
      >
        <PrintIcon style={{ marginRight: 4 }} /> Print
      </Button>
    </div>
  );
}

export default App;
