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
    document.getElementById("left").innerHTML = "LEFT tank requires " + requiredL + " litres";
    document.getElementById("right").innerHTML = "RIGHT tank requires " + requiredR + " litres";
    window.totfuel = parseInt(fuelA + required);
    document.getElementById("totalf").innerHTML = "TOTAL FUEL =  " + totfuel + " litres"; 
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

function wbcalculate(){
   // BEM --> Change to standard BEM: 
   var emptyweightW = 1051;
   var emptyweightA = 1912;
   var emptyweightM = emptyweightW * emptyweightA;
   // Station cockpit
   var crewget = document.getElementById("crewW").value;
   var crewW = parseInt(crewget);
   var crewA = 965;
   var crewM = crewW * crewA;
   // Station PAX
   // ZONE 1 (MAX 680kg)
   // ZONE A
   var zoneAget = document.getElementById("zoneA").value;
   var zoneA = parseInt(zoneAget);
   var zoneAA = 1.524; 
   var zoneAM = zoneA * zoneAA;
   // ZONE B
   var zoneBget = document.getElementById("zoneB").value;
   var zoneB = parseInt(zoneBget);
   var zoneBA = 1.968;
   var zoneBM = zoneB * zoneBA;
   // ZONE C
   var zoneCget = document.getElementById("zoneC").value;
   var zoneC = parseInt(zoneCget);
   var zoneCA = 2.861; 
   var zoneCM = zoneC * zoneCA;
   // ZONE check MAX weight
   var zonetotal = crewW + zoneA + zoneB + zoneC;
   if (zonetotal > 680) {
      alert("Check Traffic Load! 680kg limitation exceeded!")
   }
   // Zero Fuel
   var zerofuelW = emptyweightW + crewW + zoneA + zoneB + zoneC;
   var zerofuelM = emptyweightM + crewM + zoneAM + zoneBM + zoneCM;
   var zerofuelA = zerofuelM / zerofuelW;
   var zerofuelWlbsint = zerofuelW * 2.20462262;
   var zerofuelWlbs = parseInt(zerofuelWlbsint);
   document.getElementById("zerofuelW").innerHTML = zerofuelW + " kg" + " | " + zerofuelWlbs + " lbs";
   // Fuel 
   var fuelW = Math.round(totfuel * 0.74);
   var fuelWlbs = Math.round(fuelW * 2.20462262);
   document.getElementById("fuelW").innerHTML =  fuelW + " kg " + " | " + fuelWlbs + " lbs (@0.74)";
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
   if (takeoffW > 1905){
      alert("Check Weights: Above allowed Take-off Mass!");
      document.getElementById("toW").style.color = "red";
   }
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
   if (landingW > 1814){
      alert("Check Weights: Above allowed Landing Mass!");
      document.getElementById("ldgW").style.color = "red";
   }
}

/* Maximum Take-Off Weight: .................................................. 1905 kg (4200 lb)
Maximum Landing Weight: ................................................... 1814 kg (4000 lb)
Maximum Weight in Main Cargo Area:.................................. 680 kg (1500 lb)
Maximum Weight on Cabin Baggage Shelf:.......................... 113 kg (250 lb)
Maximum Weight in Aft Luggage Bin:.................................... 22 kg (50 lb) 

Forward Limit: 1219 mm (48 in) aft of datum at 1089 kg (2400 lb) and below;
1448 mm (57 in) aft of datum at 1905 kg (4200 lb), linear variation
between these points.
Aft Limit: 1626 mm (64 in) aft of datum at all weights
Datum: Firewall (Fuselage Station 0)
[located 1057 mm (41.63 in) forward of wing leading edge]d
*/ 