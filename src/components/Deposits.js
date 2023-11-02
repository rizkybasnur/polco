import * as React from "react";
// import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import "../App.css";
import ReactApexChart from "react-apexcharts";
import ProgressBar from "./ProgressBar";
import graph from "../assets/graph.svg";
import users from "../assets/users.svg";
import percentage from "../assets/percentage.svg";

export default function Deposits({ title, isDonut, icon }) {
  const testData = [
    { title: "Provinsi", completed: 90 },
    { title: "Kabupaten/Kota", completed: 30 },
    { title: "Kecamatan", completed: 53 },
    { title: "Kelurahan/Desa", completed: 53 },
  ];
  const tes = () => {
    let temp = "";
    if (icon === "graph")
      temp = <img src={graph} alt="logo" className="cursor-pointer" />;
    if (icon === "percentage")
      temp = <img src={percentage} alt="logo" className="cursor-pointer" />;
    if (icon === "users")
      temp = <img src={users} alt="logo" className="cursor-pointer" />;
    return temp;
  };

  const color = () => {
    let temp = "";
    if (icon === "graph") temp = "#01A3F8";
    if (icon === "percentage") temp = "#12B76A";
    if (icon === "users") temp = "#E5B400";
    return temp;
  };

  const chartData = {
    series: [44],
    options: {
      colors: [color()],
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        show: false,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "40%",
          },
          track: {
            background: "#694C2B",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              color: "#F0E6DB",
              fontSize: "30px",
              show: true,
              formatter: function (val) {
                return val;
              },
            },
          },
        },
      },
    },
  };

  return (
    <React.Fragment>
      <Paper
        elevation={0}
        sx={{
          px: 2,
          py: 1,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#302822",
          alignItems: "center",
          gap: 1,
          borderRadius: 0,
        }}
        style={{ borderBottom: "1px solid #694C2B" }}
      >
        {tes()}
        <div style={{ color: "#F0E6DB" }}>{title}</div>
      </Paper>
      {isDonut ? (
        <Paper
          elevation={0}
          sx={{
            px: 2,
            py: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            height: "100%",
            backgroundColor: "#29221D",
            borderRadius: 0,
          }}
        >
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="radialBar"
          />
        </Paper>
      ) : (
        <div
          elevation={0}
          style={{
            padding: 8,
            backgroundColor: "#29221D",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div>
            {testData.map((item, i) => (
              <Paper
                key={i}
                elevation={0}
                sx={{
                  mb: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  backgroundColor: "#29221D",
                }}
                className="bg-card"
              >
                <div style={{ textAlign: "left", color: "#F8F3ED" }}>idx</div>
                <ProgressBar
                  key={i}
                  bgcolor={item.bgcolor}
                  completed={item.completed}
                />
              </Paper>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
