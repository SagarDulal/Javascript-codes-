const date = new Date();
const year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();
if(day<10){
    day = '0' + day;
}
if(month<10){
    month = '0' + month;
}
console.log(date.getMonth());
today = month+ '-' + day + '-' + year;
console.log(today);
today = month+ '/' + day + '/' + year;
console.log(today);

