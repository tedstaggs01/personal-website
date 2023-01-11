
// empty weight
var emptyweightW = document.getElementById("emptyweightW").innerHTML;
var emptyweightA = 1912;
var emptyweightM = emptyweightW * emptyweightA;

// Station cockpit

var crewW = document.getElementById("crewW").innerHTML;
var crewA = 965;
var crewM = crewW * crewA;

// Station PAX

var paxW = document.getElementById("paxW").innerHTML;
var paxA = 1514;
var paxmom = paxW * paxA;

// Station Baggage

var baggageW = document.getElementById("baggageW").innerHTML;
var baggageA = 1514;
var baggageM = baggageW * baggageA;

// Station Fuel

var fuelW = document.getElementById("fuelW").innerHTML;
var fuelA = 1715;
var fuelM = fuelW * fuelA;

// startup; taxi; runup fuel

var taxiW = document.getElementById("taxiW").innerHTML;

// Trip Fuel

var tripW = document.getElementById("tripW").innerHTML; 

// weights

var zerofuelW = emptyweightW + crewW + paxW + baggageW;;
var rampW = zerofuelW + fuelW;
var takeoffW = rampW - taxiW;
var landingW = takeoffW - tripW;

// moments

var zerofuelM = zerofuelA * zerofuelW;
var rampM = rampA * rampW;
var takeoffM = takeoffW * takeoffA;
var landingM = landingA * landingW;

// Centre of gravities

var zerofuelA = zerofuelM / zerofuelW;
var rampA = rampM / rampW;
var takeoffA = takeoffM / takeoffW;
var landingA = landingM / landingW;

function calculatewb(){
    document.getElementById("zerofuelW").innerHTML = zerofuelW + " kg";
    document.getElementById("rampW").innerHTML = rampW + " kg";
    document.getElementById("toW").innerHTML = takeoffW + " kg";
    document.getElementById("ldgW").innerHTML = landingW + " kg";
}

calculatewb();

// these values will be transferred into a graph
// pdf output upon button 