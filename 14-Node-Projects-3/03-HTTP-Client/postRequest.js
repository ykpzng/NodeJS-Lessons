const { request } = require('http');
const https = require('https');

//! Making a POST Request

var options = {
  host: 'jsonplaceholder.typicode.com',
  path: '/users',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  }
};

let req = https.request(options, (res) => {

  if (res.statusCode !== 201) {
    console.error(`Did not get an OK from the server. Code:${res.statusCode}`);
    res.resume();
    return;
  }

  const requestData = {
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: 'Kulas Light'

  }

  req.write(JSON.stringify(requestData));


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