setInterval(() => {
    date = new Date();
    hourTime = date.getHours();
    minTime = date.getMinutes();
    secTime = date.getSeconds();
    hRotate = 30*hourTime+minTime/2;
    mrotate = 6*minTime;
    sRotate = 6*secTime;

    hour.style.transform = `rotate(${hRotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${sRotate}deg)`;
}, 1000);