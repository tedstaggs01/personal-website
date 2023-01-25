function markchecklistitem() {
    if (document.getElementById("check").checked == true) {
        
        document.getElementById("checkvalue").style.color = "green";
        
    } else {
        document.getElementById("checkvalue").style.color = "grey";
    }
}