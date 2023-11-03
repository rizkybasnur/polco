import {
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import Orders from "../components/Orders";
import Deposits from "../components/Deposits";
import DataMasukPerWilayah from "../components/DataMasukPerWilayah";
import Filter from "../components/common/Filter";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
//   table: {
//     display: 'table',
//     width: 'auto',
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderColor: '#bfbfbf',
//     marginLeft: 10,
//   },
//   tableRow: {
//     flexDirection: 'row',
//   },
//   tableCell: {
//     margin: 5,
//     padding: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: '#bfbfbf',
//   },
// });

// const tableData = [
//   { name: 'John', age: 30, city: 'New York' },
//   { name: 'Alice', age: 25, city: 'Los Angeles' },
//   { name: 'Bob', age: 40, city: 'Chicago' },
// ];

// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Table Example</Text>
//         <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <View style={styles.tableCell}>
//               <Text>Name</Text>
//             </View>
//             <View style={styles.tableCell}>
//               <Text>Age</Text>
//             </View>
//             <View style={styles.tableCell}>
//               <Text>City</Text>
//             </View>
//           </View>
//           {tableData.map((row, index) => (
//             <View style={styles.tableRow} key={index}>
//               <View style={styles.tableCell}>
//                 <Text>{row.name}</Text>
//               </View>
//               <View style={styles.tableCell}>
//                 <Text>{row.age}</Text>
//               </View>
//               <View style={styles.tableCell}>
//                 <Text>{row.city}</Text>
//               </View>
//             </View>
//           ))}
//         </View>
//       </View>
//     </Page>
//   </Document>
// );

export default function Tes() {
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  // const onSearch = () => {
  //   console.log("search");
  // };

  // const variantBackgroundColor = {
  //   filled: "primary.main",
  // };

  // const variantColor = {
  //   filled: "white",
  // };

  // function MyIconButton({ variant, ...other }) {
  //   return (
  //     <IconButton
  //       sx={{
  //         borderRadius: 2,
  //         width: 44,
  //         backgroundColor: variantBackgroundColor[variant],
  //         color: variantColor[variant],
  //         "&:hover": { backgroundColor: variantBackgroundColor[variant] },
  //       }}
  //       {...other}
  //     />
  //   );
  // }
  
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#241A0F" : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="false" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Filter />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={0}
              sx={{
                border: "1px solid #694C2B",
                display: "flex",
                flexDirection: "column",
                height: 305,
              }}
            >
              <Deposits
                title="Total Data Masuk (Angka)"
                isDonut={true}
                icon="graph"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={0}
              sx={{
                border: "1px solid #694C2B",
                display: "flex",
                flexDirection: "column",
                height: 305,
              }}
            >
              <Deposits
                title="Total Data Masuk (Persentase)"
                isDonut={true}
                icon="percentage"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={0}
              sx={{
                border: "1px solid #694C2B",
                display: "flex",
                flexDirection: "column",
                height: 305,
              }}
            >
              <Deposits title="User Online" isDonut={true} icon="users" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              elevation={0}
              sx={{
                border: "1px solid #694C2B",
                display: "flex",
                flexDirection: "column",
                height: 305,
              }}
            >
              <Deposits
                title="Total Data Per Daerah"
                isDonut={false}
                icon="graph"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={8}>
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #694C2B",
              }}
            >
              <Orders />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #694C2B",
              }}
            >
              <DataMasukPerWilayah />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
        {/* <PdfExample/> */}
      </Container>
    </Box>
  );
}
