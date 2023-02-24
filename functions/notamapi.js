var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function(e) {
  var response = e.target.responseText;
  console.log(response);
});
xhr.addEventListener('error', function(e) {
  console.error('Request error with status', e.target.status);
});
xhr.open('GET', 'https://external-api.faa.gov/notamapi/v1/notams?icaoLocation=ELLX');
xhr.setRequestHeader('client_id','b2b035e2195540f0a2b3589df7e6ee0d');
xhr.setRequestHeader('client_secret','bc70867CBA5b4CEab11f571DCBA87B47');
xhr.send();

function success(){
  document.getElementById("pushnotam").innerHTML = all;
}