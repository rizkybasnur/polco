import React from 'react';
import { jsPDF } from 'jspdf';
import { Button } from '@mui/material';
import PrintIcon from "@mui/icons-material/Print";

const generatePDF = () => {
  // Create a new PDF document
  const doc = new jsPDF();

  // Add content to the PDF
  doc.text('Hello, this is your PDF!', 10, 10);

  // Save the PDF as a data URI
  return doc.output('datauristring');
};

const PDFViewer = () => {
  const openPdfInNewTab = () => {
    // Generate the PDF data URI
    const pdfDataUri = generatePDF();

    // Open the PDF in a new tab
    const newTab = window.open();
    newTab.document.write(`<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`);
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
