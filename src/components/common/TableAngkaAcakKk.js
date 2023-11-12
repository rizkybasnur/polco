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
        {title}
      </div>
      {data.length ? (
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            "& .MuiTableCell-root": {
              border: "1px solid #694C2B",
            },
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {data.map((row, i) => (
                <TableRow key={row.label}>
                  <TableCell
                    key={row.label}
                    align="left"
                    sx={{
                      backgroundColor: "",
                      color: "#F0E6DB",
                      fontFamily: "DM Sans",
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    style={{ padding: 12 }}
                  >
                    <div>ANGKA TERPILIH KE-({i + 1})</div>
                  </TableCell>
                  {row.angka.map((col) => (
                    <TableCell
                      key={col.isTerpilih}
                      align="left"
                      sx={{
                        backgroundColor: `${
                          col.isTerpilih === "1" ? "#362717" : ""
                        }`,
                        color: "#F0E6DB",
                        fontFamily: "DM Sans",
                        fontSize: 14,
                        fontWeight: 500,
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                      style={{ padding: 12 }}
                    >
                      <div>{col.angka}</div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div
          style={{
            padding: 16,
            width: "100%",
            borderTop: "0.5px #694C2B solid",
            borderLeft: "0.5px #694C2B solid",
            borderRight: "0.5px #694C2B solid",
            backgroundColor: "#fff",
            color: "#999",
            fontSize: "17px",
            fontWeight: 500,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          No Data
        </div>
      )}
    </div>
  );
}

export default TableManual;
