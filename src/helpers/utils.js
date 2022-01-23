import { format } from "date-fns";

// converts GMT time to ##:##
export const reformatTime = (shortTime) => {
  const time = new Date(shortTime);
  return format(time, "p");
};
