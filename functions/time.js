function getutc() {
    const date = new Date();
    console.log(date.getUTCHours());
    console.log(date.getUTCMinutes());
    document.getElementById("utc").innerHTML = date.getUTCHours() + ":"+  date.getUTCMinutes();
}