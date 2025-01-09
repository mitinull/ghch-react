import { jalaaliToDateObject } from "jalaali-js";

export function toDate(jDate) {
  const jDateArray = jDate.split("/").map((s) => Number(s));
  return jalaaliToDateObject(...jDateArray);
}
