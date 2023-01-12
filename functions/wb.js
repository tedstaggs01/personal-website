
// Add Airplane profiles

var lxmdt = {
    type: "Airvan",
    model: "GA8",
    emptyweight: 1051,
    emptyweightarm: 1912,
    crewarm: 965,
    paxarm: 1514,
    baggagearm: 1514,
    fuelarm: 1715,
    fuelcapacity: "xyz"
};

function wbcalculate(){
    
    // BEM
    
    var emptyweightW = 1051;
    var emptyweightA = 1912;
    var emptyweightM = emptyweightW * emptyweightA;
    
    // Station cockpit
    
    var crewW = document.getElementById("crewW").innerHTML;
    var crewA = 965;
    var crewM = crewW * crewA;
    
    // Station PAX
    
    var paxW = document.getElementById("paxW").innerHTML;
    var paxA = 1514;
    var paxM = paxW * paxA;
    
    // Station Baggage
    
    var baggageW = document.getElementById("baggageW").innerHTML;
    var baggageA = 1514;
    var baggageM = baggageW * baggageA;

    // Zero Fuel

    var zerofuelW = emptyweightW + crewW + paxW + baggageW;
    var zerofuelM = emptyweightM + crewM + paxM + baggageM;
    var zerofuelA = zerofuelM / zerofuelW;
    
    // Station Fuel
    
    var fuelW = document.getElementById("fuelW").innerHTML;
    var fuelA = 1715;
    var fuelM = fuelW * fuelA;

    // Ramp

    var rampW = zerofuelW + fuelW;
    var rampM = zerofuelM + fuelM;
    var rampA = zerofuelM / zerofuelW;
    
    // startup; taxi; runup fuel
    
    var taxiW = document.getElementById("taxiW").innerHTML;
    var taxiM = fuelA * taxiW;

    // Takeoff W

    var takeoffW = rampW - taxiW;
    var takeoffM = rampM - taxiM;
    var takeoffA = takeoffM / takeoffW;
    
    // Trip Fuel
    
    var tripW = document.getElementById("tripW").innerHTML; 
    var tripM = tripW * fuelA;

    // Landing Weight

    var landingW = takeoffW - tripW;
    var landingM = takeoffM - tripM;
    var landingA = landingM / landingW;
   
    document.getElementById("zerofuelW").innerHTML = zerofuelW + " kg";
    document.getElementById("rampW").innerHTML = rampW + " kg";
    document.getElementById("toW").innerHTML = takeoffW + " kg";
    document.getElementById("ldgW").innerHTML = landingW + " kg";
}

wbcalculate();

// these values will be transferred into a graph
// pdf output upon button 