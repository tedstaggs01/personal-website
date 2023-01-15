var totfuel;

function fuelcalculate() {
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
    var totfuel = fuelAR + fuelAL + required;
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

function wbcalculate() {
   // BEM
   var emptyweightget = document.getElementById("bem").value;
   var emptyweightW = parseInt(emptyweightget);
   var emptyweightA = 1912;
   var emptyweightM = emptyweightW * emptyweightA;
   // Station cockpit
   var crewget = document.getElementById("crewW").value;
   var crewW = parseInt(crewget);
   var crewA = 965;
   var crewM = crewW * crewA;
   // Station PAX
   var paxget = document.getElementById("paxW").value;
   var paxW = parseInt(paxget);
   var paxA = 1514;
   var paxM = paxW * paxA;
   // Station Baggage 
   var baggageget = document.getElementById("baggageW").value;
   var baggageW = parseInt(baggageget);
   var baggageA = 1514;
   var baggageM = baggageW * baggageA;
   // Zero Fuel
   var zerofuelW = emptyweightW + crewW + paxW + baggageW;
   var zerofuelM = emptyweightM + crewM + paxM + baggageM;
   var zerofuelA = zerofuelM / zerofuelW;
   var zerofuelWlbsint = zerofuelW * 2.20462262;
   var zerofuelWlbs = parseInt(zerofuelWlbsint);
   document.getElementById("zerofuelW").innerHTML = zerofuelW + " kg" + " | " + zerofuelWlbs + " lbs";
   // Station Fuel
   var fuelW = totfuel * 0.74; // takes litres into kg from previous function...
   var fuelA = 1715;
   var fuelM = fuelW * fuelA;
   document.getElementById("fuelW").innerHTML = totfuel + " litres AVGAS100LL | " + fuelW + " kg (density @0.74)"
   // Ramp
   var rampW = zerofuelW + fuelW;
   var rampM = zerofuelM + fuelM;
   var rampA = zerofuelM / zerofuelW;
   var rampWlbsint = rampW + 2.20462262;
   var rampWlbs = parseInt(rampWlbsint);
   document.getElementById("rampW").innerHTML = rampW + " kg" + " | " + rampWlbs + " lbs";
   // startup; taxi; runup fuel
   var taxiget = document.getElementById("taxiW").value;
   var taxiW = parseInt(taxiget);
   var taxiM = fuelA * taxiW;
   // Takeoff W
   var takeoffW = rampW - taxiW;
   var takeoffM = rampM - taxiM;
   var takeoffA = takeoffM / takeoffW;
   var takeoffWlbsint = takeoffW * 2.20462262;
   var takeoffWlbs = PaymentRequest(takeoffWlbsint);
   document.getElementById("toW").innerHTML = takeoffW + " kg" + " | " + takeoffWlbs + " lbs";
   // Trip Fuel
   var tripget = document.getElementById("tripW").value; 
   var tripW = parseInt(tripget);
   var tripM = tripW * fuelA;
   // Landing Weight
   var landingW = takeoffW - tripW;
   var landingM = takeoffM - tripM;
   var landingA = landingM / landingW;
   var landingWlbsint = landingW * 2.20462262;
   var landingWlbs = parseInt(landingWlbsint);
   document.getElementById("ldgW").innerHTML = landingW + " kg" + " | " + landingWlbs + " lbs";
}