"use strict";



const displayTime=function()
{
    const now=new Date();
    const hours=now.getHours();
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    document.querySelector(".hours").innerHTML=hours;
    document.querySelector(".minutes").innerHTML=minutes;
    document.querySelector(".seconds").innerHTML=seconds;
}

setInterval(displayTime,10);