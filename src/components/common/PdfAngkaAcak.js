import ReactDOMServer from "react-dom/server";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import { Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

import "./pdf.css";

function App({ surveyor, rt, kk }) {
  const pdfJSX = () => {
    return (
      <div className="container">
        <table>
          <tr>
            <th colSpan="2">ANGKA ACAK</th>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Provinsi</td>
            <td style={{ width: "70%" }}>{surveyor?.provinces}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Kabupaten/Kota</td>
            <td style={{ width: "70%" }}>{surveyor?.kabupaten}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Kecamatan</td>
            <td style={{ width: "70%" }}>{surveyor?.kecamatan}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Kelurahan/Desa</td>
            <td style={{ width: "70%" }}>{surveyor?.kelurahan}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Nama Surveyor</td>
            <td style={{ width: "70%" }}>{surveyor?.nama}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Handphoe</td>
            <td style={{ width: "70%" }}>{surveyor?.no_telp}</td>
          </tr>
        </table>
        <table>
          <tr>
            <th colSpan="100">LEMBAR ANGKA ACAK UNTUK MEMILIH RT</th>
          </tr>
          <tr>
            {rt.map((col) => (
              <td
                style={{
                  backgroundColor: col.isTerpilih === "1" ? "#30D5C8" : "",
                }}
              >
                {col.angka}
              </td>
            ))}
          </tr>
        </table>
        <table>
          <tr>
            <th colSpan="100">LEMBAR ANGKA ACAK UNTUK MEMILIH KK</th>
          </tr>
          {kk.map((row, i) => (
            <tr>
              <td style={{ width: "30%" }}>ANGKA TERPILIH KE-({i + 1})</td>
              {rt.map((col) => (
                <td
                  style={{
                    backgroundColor: col.isTerpilih === "1" ? "#30D5C8" : "",
                  }}
                >
                  {col.angka}
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    );
  };

  const printHandler = () => {
    const printElement = ReactDOMServer.renderToString(pdfJSX());
    // const printElement = pdfJSX();

    html2pdf()
      .from(printElement)
      .set({
        margin: 10,
        filename: "Angka Acak.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" }, // Set orientation to landscape
      })
      .output("dataurlnewwindow");
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
