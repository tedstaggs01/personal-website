function getutc() {
    const date = new Date();
    document.getElementById("utc").innerHTML = date.getUTCHours() + ":"+  date.getUTCMinutes();
}