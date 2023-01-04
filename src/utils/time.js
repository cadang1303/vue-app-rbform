export function formatDate(date){
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

    let formattedDate = hour + ':' + min + ' ' + day + '/' + month + '/' + year;

    return formattedDate;
}