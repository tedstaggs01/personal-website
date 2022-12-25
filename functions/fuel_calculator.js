function calculate() {
    var fuelAR = document.getElementById("fuelAR").value; // grap input fuel in RIGHT TANK
    var fuelAL = document.getElementById("fuelAL").value; // grap input fuel in LEFT TANK
    var stick = document.getElementById("stick").value; // grap input STICKS desired
    var ferry = document.getElementById("ferry").value; // grap input FERRY desired
    var extra = document.getElementById("extra").value; // grap input extra desired
    var nfuelAR = parseInt(fuelAR);
    var nfuelAL = parseInt(fuelAL);
    var fuelA = nfuelAR + nfuelAL; // fuel available
    var onestick = 50; // Fuel required for 1 Stick
    var oneferry = 30; // Fuel required for 1 Ferry
    var nstick = parseInt(stick);
    var nferry = parseInt(ferry);
    var nextra = parseInt(extra);
    var stickD = nstick * 50; // Fuel for sticks desired
    var ferryD = nferry * 30; // Fuel for ferrys desired
    var minimum = 65; // Alternate + Reserve: 20L + 45L 
    var desired = stickD + ferryD + nextra + minimum; // desired fuel for start-up
    var required = desired - fuelA; // fuel required to be fuelled
    var perR = undefined;
    var perL = undefined;
    var desiredL = desired / 2;
    var desiredR = desired / 2;
    // fuel desired L equals R thus Fuel is balanced
    var requiredL = desiredL - fuelAL;
    var requiredR = desiredR - fuelAR;
    // Output this required R and Left 
    document.getElementById("left").innerHTML = "Left tank requires " + requiredL + " litres";
    document.getElementById("right").innerHTML = "Right tank requires " + requiredR + " litres";
    if (desired > 332) {
       alert("Check P.O.H. Fuel Limitations Section 2-9!");
    } else {
     alert("Note Fuel percentage distribution is not yet implemented!");
    }
    if (nstick > 4) {
       alert("Check Take - off Performance!");
    }
    if (desired < 65) {
     alert("Fuel Reserve ONLY! Check fuel desired!");
    }
    if (nferry > 2) {
     alert("Are more than 2 ferrys required?");
    }
    if (requiredL > 170) {
     alert("Check P.O.H. Fuel Limitations Section 2-9!");
    }
    if (requiredR > 170) {
     alert("Check P.O.H. Fuel Limitations Section 2-9!");
    }         
}