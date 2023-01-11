function getutc() {
    const date = new Date();
    console.log(date.getUTCHours());
    console.log(date.getUTCMinutes());
    document.getElementById("utc").innerHTML = date.getUTCHours() + ":"+  date.getUTCMinutes();
}

getutc();

function getlmt(){
    const lmt = new Date();
    console.log(lmt.getHours());
    console.log(lmt.getMinutes());
    document.getElementById("lmt").innerHTML = lmt.getHours() + ":" + lmt.getMinutes();
}

getlmt();

function getyear(){
    const copyr = new Date();
    console.log(copyr.getFullYear());
    document.getElementById("copyright").innerHTML = copyr.getFullYear();
}

getyear();

