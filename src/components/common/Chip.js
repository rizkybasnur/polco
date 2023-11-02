import Place from "@mui/icons-material/Place";

function Chip({ title, id, icon }) {
  return (
    <div
      className={`chip-text cursor-pointer ${
        id === "1" ? "success" : "warning"
      }`}
      style={{
        borderRadius: 16,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 2,
        paddingBottom: 2,
        width: "fit-content",
        display: "flex",
        alignItems: "center",
      }}
    >
      {icon && <Place fontSize="extra-small" />}
      {title}
    </div>
  );
}

export default Chip;
