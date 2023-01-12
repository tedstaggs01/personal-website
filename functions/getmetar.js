var xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    success(JSON.parse(this.responseText));
  }
});

xhr.open("GET", "https://api.checkwx.com/metar/ELLX/decoded");
xhr.setRequestHeader("X-API-KEY", "0fb79b0d7a774dc59771b106a2");
xhr.send();

function success(response) {
  if (response.results > 0) {
      var metar = response.data[0];

      var pressureALT = (1013 - metar.barometer.mb)*27 + 1234;
      var palt = parseInt(pressureALT);
      var densityALT = pressureALT + 118.8 * (metar.temperature.celsius - 12,5);
      var dalt = parseInt(densityALT);

      document.getElementById('icao').innerText = metar.icao;
      document.getElementById('name').innerText = metar.station.name;
      document.getElementById('raw').innerText = metar.raw_text;
      document.getElementById("frz").innerText = (metar.temperature.celsius/2)*1000 + 1234 + "ft";
      document.getElementById('pa').innerText = palt + "ft";
      document.getElementById('da').innerText = dalt +"ft";

    } else {
      document.getElementById('raw').innerText = 'No results returned from API';
    }
}

function quicklabel(){
  document.getElementById('quicklabel').innerText = metar.flight_category;
  var quickla = metar.flight_category;
  if (quickla = "VFR") {
    document.getElementById("quicklabel").style.background = "#04AA6D";
  } if (quickla = "MVFR"){
    document.getElementById("quicklabel").style.background = "#2196F3";
  } if (quickla = "IFR") {
    document.getElementById("quicklabel").style.background = "#f44336";
  } if (quickla = "LIFR") {
    document.getElementById("quicklabel").style.background = "#b300b3";
  }
}
quicklabel();