import React from "react";
import { jsPDF } from "jspdf";
import { Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

const generatePDF = () => {
  // Create a new PDF document
  const doc = new jsPDF();

  const data = [
    ["Nama Kegiatan", "Age"],
    ["Nama Surveyor", "25"],
    ["Waktu Survey", "30"],
    ["Jumlah Responden", "28"],
    ["Asli", "28"],
    ["Pengganti", "28"],
    ["Kelurahan/Desa", "28"],
  ];

  let y = 20;

  doc.setFont("helvetica", "bold");
  doc.text("Table Header", 200, y);
  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8); // Set font size to 8 for a more compact table

  const cellWidth = 50;

  data.forEach((row) => {
    const [name, age] = row;

    // Borders for data cells
    doc.rect(20, y, cellWidth, 10, "S");
    doc.text(name, 50, y + 8);

    doc.rect(70, y, cellWidth, 10, "S");
    doc.text(age, 200, y + 8);

    y += 10;
  });

  // Save the PDF as a data URI
  return doc.output("datauristring");
};

const PDFViewer = () => {
  const openPdfInNewTab = () => {
    // Generate the PDF data URI
    const pdfDataUri = generatePDF();

    // Open the PDF in a new tab
    const newTab = window.open();
    newTab.document.write(
      `<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`
    );
  };

  return (
    <div>
      <Button
        variant="contained"
        //   onClick={onClose}
        color="primary"
        style={{ borderRadius: 50 }}
        onClick={openPdfInNewTab}
      >
        <PrintIcon style={{ marginRight: 4 }} /> Print
      </Button>
    </div>
  );
};

export default PDFViewer;
