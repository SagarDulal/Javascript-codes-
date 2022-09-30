const today = new Date();
const day = today.getDay();
console.log(today.getDay());
var daylist =["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" ,"Friday" , "Saturday"]
console.log("Today is " + daylist[day]);
var hour = today.getHours();
console.log(today.getHours())
var minute = today.getMinutes();
console.log(minute)
var seconds = today.getSeconds();
console.log(seconds)
console.log('Current time is ' +hour + ':' + minute + ':' + seconds)
var prepand = (hour>12)? "PM": "PM";
console.log(prepand);
hour = (hour>12)? hour-12:hour;
console.log(hour)
if(hour ===0 && prepand === "PM"){
    if(minute ==="00" && seconds ==="00"){
        hour = 12;
        prepand ="Noon"
    }
}
if(hour ===0 && prepand === "AM"){
    if(minute ==="00" && seconds ==="00"){
        hour = 12;
        prepand ="Midnight"
    }
}
console.log("Current time is " + hour +" "+prepand+ ": " +minute + ":" + seconds)