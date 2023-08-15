"use strict";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = [
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                     ];


let dateHolder = document.getElementById("date");
let dayHolder = document.getElementById("day");
let hourHolder = document.getElementById("hours");
let minuteHolder = document.getElementById("minutes");
let secondHolder = document.getElementById("seconds");
let sessionHolder = document.getElementById("session");

let formatButton = document.getElementById("toggle-btn");

let militaryFormat = false;
formatButton.innerHTML = "24-hr";

setInterval(updateTime, 1000 + "ms")

function updateTime()
{


    var d = new Date();
    var month = d.getMonth();
    var mins = d.getMinutes();
    var date = d.getDate();
    var day = d.getDay();
    var year = d.getFullYear();
    var hrs = d.getHours();
    var secs = d.getSeconds();

    dateHolder.innerHTML = monthsOfYear[month] +  " " + date + ", " + year;
    dayHolder.innerHTML = daysOfWeek[day];
    if(militaryFormat)
    {
        hourHolder.innerHTML = hrs;
    }
    else
    {
        if(hrs > 12 && hrs < 22)
        {
            hourHolder.innerHTML = "0" + (hrs-12);
        }
        else if(hrs > 12 && hrs >= 10)
        {
            hourHolder.innerHTML = hrs-12;
        }
        else
        {
            hourHolder.innerHTML = hrs;
        }
        
    }

    minuteHolder.innerHTML = mins;
    secondHolder.innerHTML = secs;
    if(hrs < 12)
    {
        sessionHolder.innerHTML = "AM";
    }
    else
    {
        sessionHolder.innerHTML = "PM";
    }
}

formatButton.onclick = function()
{
    if(militaryFormat)
    {
        militaryFormat = false;
        formatButton.innerHTML = "24-hr";
        updateTime();
    }
    else
    {
        militaryFormat = true;
        formatButton.innerHTML = "12-hr";
        updateTime();
    }
}

