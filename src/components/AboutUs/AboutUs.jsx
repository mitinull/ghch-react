import { Header } from "../Header/Header";
import GridIcon from "../../assets/grid.svg";
import GithubIcon from "../../assets/github.svg";
import MailIcon from "../../assets/mail.svg";
import { useClickyMount } from "../../hooks/useClickyFocus";

export function AboutUs() {
  useClickyMount("about-us");

  return (
    <div>
      <Header title="دربارهٔ ما" />
      <div
        style={{ fontWeight: 400, padding: "0 30px", fontSize: 18 }}
        className="page-enter"
      >
        <div>
          با «غذا چیه؟» دیگه لازم نیست هی بگردی ببینی وعده‌ی بعدی چیه! این
          برنامه به‌طور خودکار غذای بعدی رو نشون می‌ده و همیشه در دسترسه. یه
          پروژه‌ٔ مستقل و متن‌باز برای دانشجوهای دانشگاه تهران!
        </div>
        <div
          style={{
            gap: 35,
            marginTop: 50,
            paddingTop: 15,
            display: "flex",
            paddingRight: 45,
            paddingBottom: 15,
            flexDirection: "column",
            borderRight: "1px solid black",
          }}
        >
          <Developer
            title="توسعه‌دهنده"
            name="محمد ترابی (mitinull)"
            detail="ورودی ۹۹ علوم کامپیوتر دانشگاه تهران"
          />
          <Developer
            title="با تشکر از مشارکت"
            name="محمد مهدی احمدی"
            detail="ورودی ۱۴۰۰ علوم کامپیوتر دانشگاه تهران"
          />
        </div>
        <div
          style={{
            marginTop: 70,
            marginBottom: 50,
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <ExternalLink
            title="دوست داری پروژه‌های دیگهٔ mitinull رو ببینی؟"
            icon={GridIcon}
            linkText="mitinull.vercel.app/fa"
            linkHref="https://mitinull.vercel.app/fa"
          />
          <ExternalLink
            title="سورس‌کد رو می‌خوای ببینی؟"
            icon={GithubIcon}
            linkText="github.com/mitinull/ghch-react"
            linkHref="https://github.com/mitinull/ghch-react"
          />
          <ExternalLink
            title="پیشنهاد، انتقاد یا مشکلی داری؟"
            icon={MailIcon}
            linkText="mitinull@gmail.com"
            linkHref="mailto:mitinull@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

function Developer({ title, name, detail }) {
  return (
    <div>
      <div style={{ fontWeight: 400, fontSize: 16, lineHeight: "160%" }}>
        {title}
      </div>
      <div style={{ fontWeight: 600, fontSize: 18, lineHeight: "220%" }}>
        {name}
      </div>
      <div
        style={{
          fontSize: 13,
          fontWeight: 500,
          opacity: 0.6,
          lineHeight: "180%",
        }}
      >
        {detail}
      </div>
    </div>
  );
}

function ExternalLink({ title, icon, linkText, linkHref }) {
  return (
    <div style={{ fontSize: 15, fontWeight: 500 }}>
      <div>{title}</div>
      <div
        style={{
          border: "1px solid black",
          borderRadius: 5,
          padding: "13px 15px",
          display: "flex",
          alignItems: "center",
          gap: 15,
          flexDirection: "row-reverse",
          fontSize: 16,
          fontWeight: 500,
          marginTop: 15,
        }}
      >
        <img src={icon} alt="icon" />
        <a
          href={linkHref}
          target="_blank"
          style={{ textDecoration: "underline" }}
          onClick={() => {
            if (window.clickyReady && window.clicky) {
              window.clicky.log("external-link", linkHref);
            }
          }}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}
