export function ErrorMessage({ children }) {
  return (
    <div
      style={{
        fontSize: 20,
        color: "white",
        borderRadius: 5,
        fontWeight: 600,
        textAlign: "center",
        padding: "40px 30px",
        backgroundColor: "#123524",
      }}
    >
      {children}
    </div>
  );
}
