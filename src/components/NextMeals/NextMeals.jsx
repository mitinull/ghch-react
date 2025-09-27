import { useState } from "react";
import { useClickyMount } from "../../hooks/useClickyFocus";
import { useMeals } from "../../hooks/useMeals";
import { useTime } from "../../hooks/useTime";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { LoadingCard } from "../LoadingCard/LoadingCard";
import { Meal } from "../Meal/Meal";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { findNextMealIndex } from "./findNextMealIndex";

export function NextMeals() {
  const { time } = useTime();
  const [modalOpen, setModalOpen] = useState(false);
  const { isPending, isError, isFetching, meals } = useMeals();
  const title = "غذا چیه؟";
  const hasMenu = true;

  useClickyMount("main-page");

  if (isPending)
    return (
      <PageWrapper title={title} hasMenu={hasMenu}>
        <LoadingCard />
        <LoadingCard />
      </PageWrapper>
    );

  if (isError)
    return (
      <PageWrapper title={title} hasMenu={hasMenu}>
        <ErrorMessage>خطا در بارگیری اطلاعات!</ErrorMessage>
      </PageWrapper>
    );

  const nextMealIndex = findNextMealIndex(meals, time);

  const hasSecondMeal = !!meals[nextMealIndex + 1];

  if (nextMealIndex === -1 || !meals[nextMealIndex]) {
    return (
      <PageWrapper title={title} hasMenu={hasMenu}>
        {isFetching ? (
          <>
            <LoadingCard />
            <LoadingCard />
          </>
        ) : (
          <ErrorMessage>وعدهٔ بعدی یافت نشد!</ErrorMessage>
        )}
      </PageWrapper>
    );
  }

  return (
    <>
      <PageWrapper title={title} hasMenu={hasMenu}>
        <div
          onClick={() => setModalOpen(true)}
          style={{
            color: "white",
            borderRadius: "5px",
            padding: "16px 20px",
            background: "#273E7B",
          }}
        >
          اطلاعیه مهم (برای مشاهده کلیک کنید)
        </div>
        <Meal meal={meals[nextMealIndex]} />
        {hasSecondMeal && <Meal meal={meals[nextMealIndex + 1]} />}
        {modalOpen && <TempModal onClose={() => setModalOpen(false)} />}
      </PageWrapper>
    </>
  );
}

function TempModal({ onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        top: 0,
        left: 0,
        zIndex: 1000,
        width: "100%",
        height: "100%",
        padding: "10px",
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "#000",
          padding: "20px",
          maxWidth: "600px",
          borderRadius: "5px",
          fontSize: "18px",
          lineHeight: "1.6",
          overflowY: "auto",
          maxHeight: "80%",
          backgroundColor: "#ddddff",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <p>
          به دلیل فارغ‌التحصیلی، دسترسی من به منوی غذاها بسیار محدود شده است و
          احتمال دارد در هفته‌های آینده منوها به‌روزرسانی نشوند.
        </p>
        <p>
          اگر به منوی غذاهای دانشگاه و خوابگاه دسترسی دارید و تمایل به همکاری
          دارید، می‌توانید از یکی از روش‌های زیر به ادامه‌دار شدن این سرویس کمک
          کنید. در صورت تمایل، امکان دریافت دستمزد هفتگی نیز وجود دارد:
        </p>
        <p>
          ۱. هر هفته با موبایل یا کامپیوتر وارد سایت غذا شوید، لیست غذاها را
          دانلود کرده و برای من ارسال کنید.
        </p>
        <p>
          ۲. (روش پیشنهادی) دسترسی مستقیم به منوی غذاها را در اختیار من بگذارید
          تا بتوانم خودم آن را دریافت و بروزرسانی کنم.
        </p>
        <p>
          برای هماهنگی به{" "}
          <a
            style={{
              color: "#0000ee",
            }}
            href="https://t.me/torblue"
          >
            @torblue
          </a>{" "}
          در تلگرام پیام دهید.
        </p>
        <p>با سپاس از همراهی شما 🙏</p>
      </div>
    </div>
  );
}
