const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 16,
    width: "100%",
    backgroundColor: "#48341E",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    borderRadius: "inherit",
    background: `#12B76A`,
  };

  const labelStyles = {
    padding: 5,
    color: "#F8F3ED",
    marginLeft: "auto",
    fontSize: "10px",
    fontWeight: 500,
    lineHeight: "13px",
    letterSpacing: "0em",
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={containerStyles}>
        <div style={fillerStyles} />
      </div>
      <div style={labelStyles}>{`${completed}%`}</div>
    </div>
  );
};

export default ProgressBar;
