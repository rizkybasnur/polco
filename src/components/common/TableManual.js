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
                Provinsi
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
                {data?.provinces}
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
                Kabupaten / Kota
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
                {data?.kabupaten}
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
                Kecamatan
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
                {data?.kecamatan}
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
                Kelurahan / Desa
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
                {data?.kelurahan}
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
                Nama Surveyor
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
                Handphone
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
                {data?.no_telp}
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
                Google Maps
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
                {data?.provinces}
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
                Foto
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
                {data?.provinces}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableManual;
