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
          borderTop: "0.5px #C8D3E9 solid",
          borderLeft: "0.5px #C8D3E9 solid",
          borderRight: "0.5px #C8D3E9 solid",
          borderRadius: "8px 8px 0px 0px",
          backgroundColor: "#FCFAF8",
          color: "#7D879B",
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
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          "& .MuiTableCell-root": {
            border: "1px solid #C8D3E9",
          },
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                {row.map((col) => (
                  <TableCell
                    key={col.id}
                    align="left"
                    sx={{
                      backgroundColor: `${col.id === 1 ? "#F7F2EC" : ""}`,
                      color: "#7D879B",
                      fontFamily: "DM Sans",
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    style={{ padding: 12 }}
                  >
                    <div>{col.value}</div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableManual;
