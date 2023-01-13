
// Add Airplane profiles

/* var lxmdt = {
    type: "Airvan",
    model: "GA8",
    emptyweight: 1051,
    emptyweightarm: 1912,
    crewarm: 965,
    paxarm: 1514,
    baggagearm: 1514,
    fuelarm: 1715,
    fuelcapacity: "xyz"
}; */

function wbcalculate(){
    
    // BEM
    var emptyweightW = 1051;
    var emptyweightA = 1912;
    var emptyweightM = emptyweightW * emptyweightA;
    // Station cockpit
    var crewW = document.getElementById("crewW").value;
    var crewA = 965;
    var crewM = crewW * crewA;
    // Station PAX
    var paxW = document.getElementById("paxW").value;
    var paxA = 1514;
    var paxM = paxW * paxA;
    // Station Baggage 
    var baggageW = document.getElementById("baggageW").value;
    var baggageA = 1514;
    var baggageM = baggageW * baggageA;
    // Zero Fuel
    var zerofuelW = emptyweightW + crewW + paxW + baggageW;
    var zerofuelM = emptyweightM + crewM + paxM + baggageM;
    var zerofuelA = zerofuelM / zerofuelW;
    var zerofuelWlbs = zerofuelW * 2.20462262;
    // Station Fuel
    var fuelW = document.getElementById("fuelW").value;
    var fuelA = 1715;
    var fuelM = fuelW * fuelA;
    // Ramp
    var rampW = zerofuelW + fuelW;
    var rampM = zerofuelM + fuelM;
    var rampA = zerofuelM / zerofuelW;
    var rampWlbs = rampW + 2.20462262;
    // startup; taxi; runup fuel
    var taxiW = document.getElementById("taxiW").value;
    var taxiM = fuelA * taxiW;
    // Takeoff W
    var takeoffW = rampW - taxiW;
    var takeoffM = rampM - taxiM;
    var takeoffA = takeoffM / takeoffW;
    var takeoffWlbs = takeoffW * 2.20462262;
    // Trip Fuel
    var tripW = document.getElementById("tripW").value; 
    var tripM = tripW * fuelA;
    // Landing Weight
    var landingW = takeoffW - tripW;
    var landingM = takeoffM - tripM;
    var landingA = landingM / landingW;
    var landingWlbs = landingW * 2.20462262; 
    document.getElementById("zerofuelW").innerHTML = zerofuelW + " kg" + " | " + zerofuelWlbs + " lbs";
    document.getElementById("rampW").innerHTML = rampW + " kg" + " | " + rampWlbs + " lbs";
    document.getElementById("toW").innerHTML = takeoffW + " kg" + " | " + takeoffWlbs + " lbs";
    document.getElementById("ldgW").innerHTML = landingW + " kg" + " | " + landingWlbs + " lbs";
}

// these values will be transferred into a graph
// pdf output upon button 