export function formatDate(date) {
  date = new Date(date);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let year = date.getFullYear();

  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;
  hour = (hour < 10 ? "0" : "") + hour;
  min = (min < 10 ? "0" : "") + min;

  let formattedDate = year + "/" + month + "/" + day + " " + hour + ":" + min;

  return formattedDate;
}

export function formatCreatedDate(date) {
  let offsetTz = 7 * 60 * 60 * 1000;
  date = new Date("2023-01-12T03:20:30.084Z").getTime();
  date = new Date(date + offsetTz);

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let year = date.getFullYear();

  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;
  hour = (hour < 10 ? "0" : "") + hour;
  min = (min < 10 ? "0" : "") + min;

  let formattedDate = year + "/" + month + "/" + day + " " + hour + ":" + min;
  
  return formattedDate;
}
