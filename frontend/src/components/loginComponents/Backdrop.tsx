const Backdrop = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "1",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        width: "100%",
        height: "100vh",
        top: "0",
        left: "0",
      }}
    />
  );
};
export default Backdrop;
