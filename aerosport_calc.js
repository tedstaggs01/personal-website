var lxaib = {
    registration: "LX-AIB",
    company: "PIPER", 
    type: "PA-28", 
    consumption: 35,
    groundf: 10,
    bemW: 647,
    bemA: 2.112,
    crewA: 2.05,
    paxA: 2.993,
    baggageA: 3.627,
    fuelA: 2.413,
};

var lxaif = {
    registration: "LX-AIF",
    company: "PIPER", 
    type: "PA-28", 
    consumption: 35,
    groundf: 10,
    bemW: 653,
    bemA: 2.1278,
    crewA: 2.05,
    paxA: 2.993,
    baggageA: 3.627,
    fuelA: 2.413,
};

var lxaig = {
    registration: "LX-AIG",
    company: "PIPER", 
    type: "PA-28", 
    consumption: 35,
    groundf: 10,
    bemW: 683,
    bemA: 2.168,
    crewA: 2.05,
    paxA: 2.993,
    baggageA: 3.627,
    fuelA: 2.413,
};

var lxaiw = {
    registration: "LX-AIW",
    company: "PIPER", 
    type: "PA-28", 
    consumption: 35,
    groundf: 10,
    bemW: 706,
    bemA: 2.191,
    crewA: 2.05,
    paxA: 2.993,
    baggageA: 3.627,
    fuelA: 2.413,
};

function fuelcalculate() {
    var fuelAR = document.getElementById("fuelAR").value; // grap input fuel in RIGHT TANK
    var fuelAL = document.getElementById("fuelAL").value; // grap input fuel in LEFT TANK
    var trip = document.getElementById("trip").value; // grap input trip desired
    var altn = document.getElementById("altn").value; // grap input altn desired
    var extra = document.getElementById("extra").value; // grap input extra desired
    var nfuelAR = parseInt(fuelAR);
    var nfuelAL = parseInt(fuelAL);
    var fuelA = nfuelAR + nfuelAL; // fuel available
    var ntrip = parseInt(trip);
    var naltn = parseInt(altn);
    var nextra = parseInt(extra);
    var cont = parseInt(5% ntrip); 
    var res; 
    var start; 
    //sdf
    var desired = trip + cont + altn + res + start;
    var required = desired - fuelA; // fuel required to be fuelled
    var desiredL = desired / 2;
    var desiredR = desired / 2;
    // fuel desired L equals R thus Fuel is balanced
    var requiredL = desiredL - fuelAL;
    var requiredR = desiredR - fuelAR;
    // Output this required R and Left 
    document.getElementById("left").innerHTML = "LEFT tank requires " + requiredL + " litres";
    document.getElementById("right").innerHTML = "RIGHT tank requires " + requiredR + " litres";
    window.totfuel = parseInt(fuelA + required);
    document.getElementById("totalf").innerHTML = "TOTAL FUEL =  " + totfuel + " litres";         
}

function wbcalculate(){
   // BEM --> Change to standard BEM: 
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
   // Fuel 
   var fuelW = Math.round(totfuel * 0.74);
   var fuelWlbs = Math.round(fuelW * 2.20462262);
   document.getElementById("fuelW").innerHTML =  fuelW + " kg " + " | " + fuelWlbs + " lbs (desity @0.74)";
   var fuelA = 1715;
   var fuelM = fuelW * fuelA;
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
   // Takeoff 
   var takeoffW = rampW - taxiW;
   var takeoffM = rampM - taxiM;
   var takeoffA = takeoffM / takeoffW;
   var takeoffWlbsint = takeoffW * 2.20462262;
   var takeoffWlbs = parseInt(takeoffWlbsint);
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