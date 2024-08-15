setInterval(() => {
    let date = new Date();

    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let ampm;

    if (hours < 12) {
        ampm = "AM";
    } else {
        ampm = "PM";
    }

    if (hours > 12) {
        hours = hours - 12;
    } else if (hours === 0) {
        hours = 12;
    }

    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    console.log(`${hours} : ${min} : ${sec} ${ampm}`);

    document.getElementById("hours").innerHTML = hours + ":" + min + ":" + sec + " " + ampm;
    document.getElementById("date").innerHTML = date.getDate() + " " + mon[date.getMonth()] + " " + date.getFullYear();
    document.getElementById("day").innerHTML = day[date.getDay()];
}, 1000);