import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

function TableManual({ title, data }) {
  return (
    <div>
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
        {title.toUpperCase()}
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
            <TableRow>
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
              >
                Nama Kegiatan
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
              >
                {data?.kegiatan}
              </TableCell>
            </TableRow>
            <TableRow>
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
              >
                Surveyor
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
              >
                {data?.nama}
              </TableCell>
            </TableRow>
            <TableRow>
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
              >
                Waktu Survey
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
              >
                {data?.waktu}
              </TableCell>
            </TableRow>
            <TableRow>
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
              >
                Jumlah Responden
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
              >
                {data?.totalResponden}
              </TableCell>
            </TableRow>
            <TableRow>
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
              >
                Asli
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
              >
                {data?.totalAsli}
              </TableCell>
            </TableRow>
            <TableRow>
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
              >
                Pengganti
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
              >
                {data?.totalGanti}
              </TableCell>
            </TableRow>
            <TableRow>
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
              >
                Kelurahan/Desa
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
              >
                {data?.desa}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableManual;
