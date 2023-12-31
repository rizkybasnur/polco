import { DataGrid } from "devextreme-react";
import { Column, Pager, Paging, Sorting } from "devextreme-react/data-grid";
import React, { useState } from "react";
import Rute from "../../assets/Rute.svg";
import ImgsViewer from "react-images-viewer";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Chip from "../monitoring/Chip";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Table({
  datas,
  column,
  paging,
  scrolling,
  sorting,
  header,
  title,
  triggerButtonClick,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);
  const [pilihan, setPilihan] = React.useState("");

  // const handleClick = () => {
  //   triggerButtonClick();
  // };
  const handleChange = (event) => {
    setPilihan(event.target.value);
  };

  const { saveProp } = React.useContext(UserContext);

  const allowedPageSizes = [5, 10, "all"];

  const onCellPrepared = (e) => {
    if (e.rowType === "data") {
      e.cellElement.style.color = "#F8F3ED";
      e.cellElement.style.backgroundColor = "#241A0F";
      e.cellElement.style.border = "1px solid #694C2B";
    } else if (e.rowType === "header") {
      e.cellElement.style.backgroundColor = "#48341E";
      e.cellElement.style.color = "#F0E6DB";
      e.cellElement.style.border = "1px solid #694C2B";
      e.cellElement.style.borderBottom = "none";
    }
  };

  const navigate = useNavigate();

  return (
    <div style={{ width: "100%" }}>
      {header && (
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
      )}
      <DataGrid
        showBorders={true}
        dataSource={datas}
        allowColumnResizing={true}
        showColumnLines={true}
        showRowLines={true}
        hoverStateEnabled={true}
        columnAutoWidth={true}
        style={{ width: "100%" }}
        onCellPrepared={onCellPrepared}
      >
        {column.map((item, i) => (
          <Column
            key={i}
            sortOrder="asc"
            caption={item.caption.toUpperCase()}
            width={item.width ? item.width : "auto"}
            dataField={item.dataField}
            cssClass="table-center"
            cellRender={(data) => {
              // Check if the age is null, and return a default value if true
              if (item.custom) {
                if (item.custom === "rute") {
                  const link = () => {
                    if (data.data.rute.length === 1) {
                      const location = `${data.data.rute[0].lat},${data.data.rute[0].long}`;
                      const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${location}`;
                      window.open(googleMapsLink, "_blank");
                    } else if (data.data.rute.length >= 2) {
                      const origin = `${data.data.rute[0].lat},${data.data.rute[0].long}`;
                      const destination = `${
                        data.data.rute[data.data.rute.length - 1].lat
                      },${data.data.rute[data.data.rute.length - 1].long}`;

                      let googleMapsLink = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=walking`;
                      if (data.data.rute.length > 2) {
                        const waypoints = data.data.rute
                          .slice(1, -1)
                          .map((coord) => `${coord.lat},${coord.long}`);
                        googleMapsLink += `&waypoints=${waypoints.join("|")}`;
                      }
                      window.open(googleMapsLink, "_blank");
                    } else {
                      console.log(
                        "Coordinates array should contain at least one point for location search or two points for directions."
                      );
                    }
                  };

                  return (
                    <div
                      style={{ display: "flex", gap: 8 }}
                      className="cursor-pointer"
                    >
                      <img src={Rute} alt="rute" />{" "}
                      <span
                        onClick={link}
                        style={{
                          color: "#175CD3",
                          fontFamily: "DM Sans",
                          fontSize: "14px",
                          fontWeight: 500,
                          letterSpacing: "0em",
                        }}
                      >
                        Cek Route
                      </span>
                    </div>
                  );
                }
                if (item.custom === "select") {
                  if (data.value === "0") {
                    return (
                      <FormControl
                        fullWidth
                        size="small"
                        style={{
                          border: "0.5px solid #694C2B",
                          borderRadius: 8,
                          color: "#F8F3ED",
                        }}
                      >
                        <InputLabel
                          id="demo-simple-select-label"
                          style={{ color: "#F8F3ED" }}
                        >
                          Jadikan Terpilih
                        </InputLabel>

                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={pilihan}
                          label="Jadikan terpilih"
                          onChange={handleChange}
                        >
                          <MenuItem value={5}>Terpilih ke-5</MenuItem>
                          <MenuItem value={4}>Terpilih ke-4</MenuItem>
                          <MenuItem value={3}>Terpilih ke-3</MenuItem>
                          <MenuItem value={2}>Terpilih ke-2</MenuItem>
                          <MenuItem value={1}>Terpilih ke-1</MenuItem>
                        </Select>
                      </FormControl>
                    );
                  } else {
                    return <div></div>;
                  }
                }
                if (item.custom === "photo") {
                  let images = datas.map((e) => ({
                    src: e.fotoDokumentasi || e.fotoKk || e.fotoWawancara,
                  }));
                  return (
                    <div>
                      <img
                        src={data.value}
                        alt="rute"
                        style={{ borderRadius: 75, width: 48, height: 48 }}
                        className="cursor-pointer"
                        onClick={(e) => {
                          setIsOpen(true);
                          setCurrImg(data.rowIndex);
                        }}
                      />
                      <ImgsViewer
                        imgs={images}
                        currImg={currImg}
                        showThumbnails={true}
                        isOpen={isOpen}
                        onClickPrev={(e) => setCurrImg(currImg - 1)}
                        onClickNext={(e) => setCurrImg(currImg + 1)}
                        onClickThumbnail={(index) => setCurrImg(index)}
                        onClose={(e) => setIsOpen(false)}
                      />
                    </div>
                  );
                }
                if (item.custom === "qc") {
                  const handleClick = () => {
                    saveProp(data.data);
                    navigate("/qc-data");
                  };
                  return (
                    <div
                      onClick={handleClick}
                      style={{ display: "flex", gap: 8 }}
                    >
                      <Chip title="Cek Hasil Wawancara" color="blue-chip" />
                      {/* <Chip title={data.value} color="success" />
                      <Chip title={data.value} color="danger" /> */}
                    </div>
                  );
                }
                if (item.custom === "doneNot") {
                  return (
                    <Chip
                      title={data.value === "1" ? "Sudah" : "Belum"}
                      color={data.value === "1" ? "success" : "danger"}
                    />
                  );
                }
                if (item.custom === "kuisioner") {
                  return (
                    <div style={{ display: "flex", gap: 8 }}>
                      <Chip title={data.data.no_kuisioner} color="success" />
                      <div>{data?.data?.kesioner}</div>
                    </div>
                  );
                }
                if (item.custom === "jawab") {
                  return (
                    <div style={{ display: "flex", gap: 8 }}>
                      <Chip title={data?.data?.no_jawab} color="danger" />
                    </div>
                  );
                }
                if (item.custom === "lat") {
                  return <div>{data.data.rute[0].lat}</div>;
                }
                if (item.custom === "long") {
                  return <div>{data.data.rute[0].long}</div>;
                }
                if (item.custom === "rtrw") {
                  return <div>{data.data.idRt + "/" + data.data.idRw}</div>;
                }
              }
              return <span>{data.value ? data.value : "-"}</span>;
            }}
          />
        ))}
        {datas && datas.length > 5 && (
          <div>
            <Paging defaultPageSize={5} />
            <Pager
              visible={true}
              allowedPageSizes={allowedPageSizes}
              displayMode="full"
              showPageSizeSelector={true}
              showInfo={true}
              showNavigationButtons={true}
            />
          </div>
        )}
        {sorting && <Sorting mode="multiple" showSortIndexes={false} />}
      </DataGrid>
    </div>
  );
}

export default Table;
