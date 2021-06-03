export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStile = {
    margin: "0px",
    color: "#3d84ef"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <>
      <div style={containerStyle}>
        <p style={titleStile}>InlineStyle</p>
        <button style={buttonStyle}>FIGHT!</button>
      </div>
    </>
  );
};
