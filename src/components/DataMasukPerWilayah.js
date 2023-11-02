import * as React from "react";
import Paper from "@mui/material/Paper";
import "../App.css";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import ProgressBar from "./ProgressBar";
import expand from "../assets/expand.svg";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
export default function Deposits({ title }) {
  const [open, setOpen] = React.useState(false);

  const testData = [
    { title: "Surabaya", completed: 90 },
    { title: "Gresik", completed: 30 },
    { title: "Sidoarjo", completed: 53 },
  ];
  // const chartData = {
  //   series: [
  //     {
  //       name: "Data Keluarga",
  //       data: [45, 52, 38, 24, 33, 26],
  //     },
  //     {
  //       name: "KK",
  //       data: [35, 41, 62, 42, 13, 18],
  //     },
  //     {
  //       name: "RT",
  //       data: [87, 57, 74, 50, 75, 38],
  //     },
  //     {
  //       name: "RW",
  //       data: [68, 23, 75, 13, 24, 55],
  //     },
  //   ],
  //   options: {
  //     markers: {
  //       size: 3,
  //       colors: undefined,
  //       strokeColors: "#fff",
  //       strokeWidth: 2,
  //       strokeOpacity: 0.9,
  //       strokeDashArray: 0,
  //       fillOpacity: 1,
  //       discrete: [],
  //       shape: "circle",
  //       radius: 2,
  //       offsetX: 0,
  //       offsetY: 0,
  //       onClick: undefined,
  //       onDblClick: undefined,
  //       showNullDataPoints: true,
  //       hover: {
  //         size: undefined,
  //         sizeOffset: 3,
  //       },
  //     },
  //     chart: {
  //       height: 200,
  //       type: "line",
  //       zoom: {
  //         enabled: true,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "straight",
  //     },
  //     title: {
  //       align: "left",
  //     },
  //     grid: {
  //       row: {
  //         colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
  //         opacity: 0.5,
  //       },
  //     },
  //     xaxis: {
  //       categories: [
  //         "20-Sep",
  //         "21-Sep",
  //         "22-Sep",
  //         "23-Sep",
  //         "24-Sep",
  //         "25-Sep",
  //         "26-Sep",
  //       ],
  //     },
  //   },
  // };

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#302822",
          alignItems: "center",
          borderRadius: 0,
        }}
        style={{ borderBottom: "1px solid #694C2B" }}
      >
        <div style={{ color: "#F0E6DB" }}>Data Masuk Per Wilayah</div>
        <img
          src={expand}
          alt="logo"
          className="cursor-pointer"
          onClick={onOpen}
        />
        <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="xl">
          <DialogTitle>Data Masuk Per Wilayah</DialogTitle>
          <DialogContent style={{ height: "100vh" }}>
            <Paper elevation={0} sx={{ p: 2 }}>
              {testData.map((item, i) => (
                <Container
                  key={i}
                  maxWidth="false"
                  disableGutters
                  sx={{ mb: 1 }}
                >
                  <Grid container>
                    <Grid item xs={3} sx={{ textAlign: "start" }}>
                      {item.title}
                    </Grid>
                    <Grid item xs={9}>
                      <ProgressBar
                        key={i}
                        bgcolor={item.bgcolor}
                        completed={item.completed}
                      />
                    </Grid>
                  </Grid>
                </Container>
              ))}
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>
              <CloseIcon style={{ marginRight: 4 }} /> Cancel
            </Button>
            <Button onClick={onClose} color="primary">
              <CheckIcon style={{ marginRight: 4 }} /> OK
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>

      <Paper
        elevation={0}
        sx={{ p: 2, backgroundColor: "#29221D", borderRadius: 0 }}
      >
        {testData.map((item, i) => (
          <Container key={i} maxWidth="false" disableGutters sx={{ mb: 1 }}>
            <Grid container>
              <Grid item xs={3} sx={{ textAlign: "start", color: "#F8F3ED" }}>
                {item.title}
              </Grid>
              <Grid item xs={9}>
                <ProgressBar
                  key={i}
                  bgcolor={item.bgcolor}
                  completed={item.completed}
                />
              </Grid>
            </Grid>
          </Container>
        ))}
      </Paper>
    </React.Fragment>
  );
}
