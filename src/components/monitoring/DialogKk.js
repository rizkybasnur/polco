import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Chip from "./Chip";
import refresh from "../../assets/refresh.svg";
import TableManual from "../common/TableManual";
import CloseIcon from "@mui/icons-material/Close";

function DialogKk({ open, onClose }) {
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
            maxWidth: "950px",
            backgroundColor: "#241A0F",
          },
        },
      }}
    >
      <DialogContent>
        <Paper elevation={0} sx={{ p: 0 }}>
          <TableManual title="ganti rt terpilih" />
        </Paper>
        <Paper elevation={0} sx={{ p: 0, mt: 4 }}>
          <div
            style={{
              padding: 16,
              width: "100%",
              borderTop: "0.5px #694C2B solid",
              borderLeft: "0.5px #694C2B solid",
              borderRight: "0.5px #694C2B solid",
              borderRadius: "8px 8px 0px 0px",
              backgroundColor: "#48341E",
              color: "#E1CDB7",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "20px",
              letterSpacing: "0em",
              textSlign: "left",
            }}
          >
            PROGRESS DATA
          </div>
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              "& .MuiTableCell-root": {
                border: "1px solid #694C2B",
              },
            }}
          >
            <Table
              sx={{ minWidth: 650, backgroundColor: "#241A0F" }}
              aria-label="simple table"
            >
              <TableBody>
                {/* {rows.map((row) => ( */}
                <TableRow
                //   key={row.name}
                >
                  <TableCell
                    align="left"
                    sx={{
                      color: "#F0E6DB",
                      fontFamily: "DM Sans",
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    style={{ padding: 12 }}
                  >
                    RW 2 RT 1
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#F0E6DB",
                      fontFamily: "DM Sans",
                      fontSize: 14,
                      fontWeight: 400,
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    style={{ padding: 12 }}
                  >
                    <div style={{ display: "flex", gap: 8 }}>
                      <Chip title="KK" color="blue-chip" />
                      <Chip title="96" color="success" />
                    </div>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#7D879B",
                      fontFamily: "DM Sans",
                      fontSize: 14,
                      fontWeight: 400,
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    style={{ padding: 12 }}
                  >
                    <div style={{ display: "flex", gap: 8 }}>
                      <Chip title="Responden Pertama" color="blue-chip" />{" "}
                      <img src={refresh} alt="logo" />
                    </div>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#7D879B",
                      fontFamily: "DM Sans",
                      fontSize: 14,
                      fontWeight: 400,
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    style={{ padding: 12 }}
                  >
                    <div style={{ display: "flex", gap: 8 }}>
                      <Chip title="Responden Pertama" color="blue-chip" />{" "}
                      <img src={refresh} alt="logo" />
                    </div>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#7D879B",
                      fontFamily: "DM Sans",
                      fontSize: 14,
                      fontWeight: 400,
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    style={{ padding: 12 }}
                  >
                    <div style={{ display: "flex", gap: 8 }}>
                      <Chip title="Responden Pertama" color="blue-chip" />{" "}
                      <img src={refresh} alt="logo" />
                    </div>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#7D879B",
                      fontFamily: "DM Sans",
                      fontSize: 14,
                      fontWeight: 400,
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    style={{ padding: 12 }}
                  >
                    <div style={{ display: "flex", gap: 8 }}>
                      <Chip title="Wawancara" color="blue-chip" />{" "}
                      <img src={refresh} alt="logo" />
                    </div>
                  </TableCell>
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Button
          variant="contained"
          onClick={onClose}
          color="error"
          style={{ borderRadius: 50 }}
          elevation={0}
        >
          <CloseIcon style={{ marginRight: 4 }} /> Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogKk;
