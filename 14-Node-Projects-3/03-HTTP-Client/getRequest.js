const { request } = require('http');
const https = require('https');


//! Making a GET Request

/* let request = https.get('https://jsonplaceholder.typicode.com/users?_limit=2', (res) => {
  if (res.statusCode !== 200) {
    console.error(`Did not get an OK from the server. Code:${res.statusCode}`);
    res.resume();
    return;
  }

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  });

  request.on('error', (err) => {
    console.error(`Encountered an error trying to make a request: ${err.message}`);
  });


}); */

//! Making Requests with request()
var options = {
  host: 'jsonplaceholder.typicode.com',
  path: '/users?_limit=20',
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

let req = https.request(options, (res) => {

  if (res.statusCode !== 200) {
    console.error(`Did not get an OK from the server. Code:${res.statusCode}`);
    res.resume();
    return;
  }

  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  });


  req.on('error', (err) => {
    console.error(`Encountered an error trying to make a request: ${err.message}`);
  });


});

req.end();


