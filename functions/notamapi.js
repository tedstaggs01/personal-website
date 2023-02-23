/*var xhr = new XMLHttpRequest();
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

*/ 

const http = require('https');
const init = {
  host: 'https://external-api.faa.gov',
  path: '/notamapi/v1/notams?icaoLocation=ELLX',
  method: 'GET',
  headers: {
    'client_id': 'b2b035e2195540f0a2b3589df7e6ee0d',
    'client_secret': 'bc70867CBA5b4CEab11f571DCBA87B47'
  }
};
const callback = function(response) {
  let result = Buffer.alloc(0);
  response.on('data', function(chunk) {
    result = Buffer.concat([result, chunk]);
  });
  
  response.on('end', function() {
    // result has response body buffer
    console.log(result.toString());
  });
};

const req = http.request(init, callback);
req.end();
