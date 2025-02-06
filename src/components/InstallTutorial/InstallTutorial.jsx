import { Header } from "../Header/Header";

export function InstallTutorial() {
  return (
    <div>
      <Header title="آموزش نصب" />
      <div
        style={{ fontWeight: 300, padding: "0 25px", fontSize: 18 }}
        className="page-enter"
      >
        روی <Bold>سه‌نقطهٔ</Bold> بالای مرورگر بزن و{" "}
        <Bold>«افزودن به صفحهٔ اصلی»</Bold> یا <Bold>«نصب برنامه»</Bold> رو
        انتخاب کن. بعدش <Bold>«غذا چیه؟»</Bold> میاد رو صفحهٔ اصلیت و مثل بقیهٔ
        اپ‌ها همیشه دم دستته! حتی بدون اینترنت هم می‌تونی ازش استفاده کنی! 😎🚀
      </div>
    </div>
  );
}

function Bold({ children }) {
  return <span style={{ fontWeight: 500 }}>{children}</span>;
}
