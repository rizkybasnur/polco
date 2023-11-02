import * as React from "react";
import ReactApexChart from "react-apexcharts";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
} from "@mui/material";
import expand from "../assets/expand.svg";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const chartData = {
  series: [
    {
      name: "Data Keluarga",
      data: [45, 52, 38, 24, 33, 26],
    },
    {
      name: "KK",
      data: [35, 41, 62, 42, 13, 18],
    },
    {
      name: "RT",
      data: [87, 57, 74, 50, 75, 38],
    },
    {
      name: "RW",
      data: [68, 23, 75, 13, 24, 55],
    },
  ],
  options: {
    legend: {
      labels: {
        colors: "#F8F3ED",
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#F8F3ED",
        },
      },
    },
    markers: {
      size: 3,
      colors: undefined,
      strokeColors: "#fff",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    chart: {
      type: "area",
      height: 200,
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      align: "left",
    },
    grid: {
      borderColor: "#694C2B",
      strokeDashArray: 7,
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: "#F8F3ED",
        },
        // axisBorder: {
        //   show: true,
        //   color: 'your-y-axis-grid-color', // Replace with the color you want
        // },
        axisTicks: {
          show: true,
          color: "red", // Replace with the color you want
        },
      },
      categories: [
        "20-Sep",
        "21-Sep",
        "22-Sep",
        "23-Sep",
        "24-Sep",
        "25-Sep",
        "26-Sep",
      ],
    },
  },
};

export default function Orders() {
  const [open, setOpen] = React.useState(false);

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
          alignItems: "center",
          backgroundColor: "#302822",
          borderRadius: 0,
        }}
        style={{ borderBottom: "1px solid #694C2B" }}
      >
        <div className="title" style={{ color: "#F0E6DB" }}>
          Data Wawancara
        </div>
        <img
          src={expand}
          alt="logo"
          className="cursor-pointer"
          onClick={onOpen}
        />
        <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="xl">
          <DialogTitle>Data Wawancara</DialogTitle>
          <DialogContent style={{ height: "100vh" }}>
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="line"
              height="100%"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>
              {" "}
              <CloseIcon style={{ marginRight: 4 }} /> Cancel
            </Button>
            <Button onClick={onClose} color="primary">
              <CheckIcon style={{ marginRight: 4 }} /> OK
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>

      <div style={{ backgroundColor: "#302822" }}>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
        />
      </div>
    </React.Fragment>
  );
}
