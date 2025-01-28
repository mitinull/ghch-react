import { jalaaliToDateObject } from "jalaali-js";

export function toDate(jDate) {
  const jDateArray = jDate.split("/").map((s) => Number(s));
  return jalaaliToDateObject(...jDateArray);
}

export function isToday(jDate) {
  const today = new Date();
  const date = toDate(jDate);

  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}

export function toDayMonth(jDate) {
  const date = toDate(jDate);
  const formatter = new Intl.DateTimeFormat("fa-IR", {
    month: "long",
    day: "numeric",
  });
  return formatter.format(date);
}
