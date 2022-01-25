import Moment from "react-moment";

// converts GMT time to ##:##
export const reformatTime = (dateString) => {
  var shortTime = new Date(dateString);
  Moment(shortTime).format("HH:mm");
};
