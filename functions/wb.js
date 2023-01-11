
// empty weight
var emptyweightW = document.getElementById("emptyweightW").innerHTML;
var emptyweightA = ;
var emptyweightM = emptyweightW * emptyweightA;

// Station cockpit

var crewW = document.getElementById("crewW").innerHTML;
var crewA = ;
var crewM = crewW * crewA;
var crewL;

// Station PAX

var paxW = document.getElementById("paxW").innerHTML;
var paxA;
var paxmom = paxW * paxA;
var paxL;

// Station Baggage

var baggageW = document.getElementById("baggageW").innerHTML;
var baggageA;
var baggageM = baggageW * baggageA;
var baggageL;

// Station Fuel

var fuelW = document.getElementById("fuelW").innerHTML;
var fuelA;
var fuelM = fuelW * fuelA;
var fuelL;

// startup; taxi; runup fuel

var taxiW = document.getElementById("taxiW").innerHTML;
var taxiL;

// Trip Fuel

var tripW = document.getElementById("tripW").innerHTML; 
var tripL;

// weights

var zerofuelW = emptyweightW + crewW + paxW + baggageW;
var zerofuelL;
var rampW = zerofuelW + fuelW;
var rampL;
var takeoffW = rampW - taxiW;
var takeoffL;
var landingW = takeoffW - tripW;
var landingL;

// moments

var zerofuelM = zerofuelA * zerofuelW;
var rampM = rampA * rampW;
var takeoffM = takeoffW * takeoffA;
var landingM = landingA * landingW;

// Centre of gravities

var zerofuelA = zerofuelM / zerofuelW;
var zerofuelL;
var rampA = rampM / rampW;
var rampL;
var takeoffA = takeoffM / takeoffW;
var takeoffL;
var landingA = landingM / landingW;
var landingL;

function calculatewb(){
    document.getElementById("zerofuelW").innerHTML = zerofuelW + " kg";
    document.getElementById("rampW").innerHTML = rampW + " kg";
    document.getElementById("toW").innerHTML = takeoffW + " kg";
    document.getElementById("ldgW").innerHTML = landingW + " kg";
}

calculatewb();



// these values will be transferred into a graph
// pdf output upon button 



