const clock = document.querySelector("#clock");
const days = document.querySelector("#dates");
let value = 0;

daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function clockEvent() {
    const date = new Date();

    const hour   = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour} : ${minute} : ${second}`;
}

function dateEvent() {
    const date = new Date();

    const month    = date.getMonth() + 1;
    const day      = date.getDate();
    const weekDay  = date.getDay();

    days.innerHTML = `${month}. ${day} (${daysOfWeek[weekDay]})`
}

clockEvent();
dateEvent();
setInterval(clockEvent, 1000);