import { Header } from "../Header/Header";

export function InstallTutorial() {
  return (
    <div>
      <Header title="آموزش نصب" />
      <div
        style={{
          fontWeight: 300,
          padding: "0 25px",
          fontSize: 18,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginTop: 5,
        }}
        className="page-enter"
      >
        <p>
          ۱. برنامه رو توی مرورگر باز کن. (<Bold>Chrome</Bold> یا{" "}
          <Bold>Safari</Bold>)
        </p>
        <p>
          ۲. روی <Bold>سه‌نقطه</Bold> (یا دکمهٔ اشتراک‌گذاری) بزن.
        </p>
        <p>
          ۳. گزینهٔ <Bold>«افزودن به صفحهٔ اصلی»</Bold> یا{" "}
          <Bold>«نصب برنامه»</Bold> رو انتخاب کن.
        </p>
        <p>
          از این به بعد <Bold>«غذا چیه؟»</Bold> همیشه دم دستته و حتی بدون
          اینترنت هم کار می‌کنه! 😎🚀
        </p>
      </div>
    </div>
  );
}

function Bold({ children }) {
  return <span style={{ fontWeight: 500 }}>{children}</span>;
}
