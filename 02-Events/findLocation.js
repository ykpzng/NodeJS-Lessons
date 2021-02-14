var http = require('http');

var options = {
  hostname: 'ipinfo.io',
  port: 80,
  path: '/json',
  method: 'GET'
};

var req = http.request(options, function (res) {
  var body = '';

  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    body += chunk;
    console.log('Your body: ' + body);
  });

  res.on('end', function () {
    var json = JSON.parse(body);
    console.log('Your location: ' + json.city + ', ' + json.region + ", " + json.ip);
    console.log('Your location2: ' + json);
  });
});

req.end();