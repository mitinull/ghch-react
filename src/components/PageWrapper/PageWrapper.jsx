import { Header } from "../Header/Header";

export function PageWrapper({ title, hasMenu, children }) {
  return (
    <div>
      <Header title={title} hasMenu={hasMenu} />
      <div
        style={{
          gap: 12,
          display: "flex",
          paddingLeft: 10,
          paddingRight: 10,
          flexDirection: "column",
        }}
        className="page-enter"
      >
        {children}
      </div>
    </div>
  );
}
