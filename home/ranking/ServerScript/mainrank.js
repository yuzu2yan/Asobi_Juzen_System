/*************************************************************
***Designer             : Shogo Imanaka
***Date                 : 2023/7/2
***Purpose              : Create localserver to execute Node script
***Module               : C3.0 M4. ranking main process 
**************************************************************/
//**execute in server
const http = require('http');
const url = require('url');
const assignRank = require('./assignrank');
const callRank = require('./callrank');

const server = http.createServer(function (req, res) {
  const reqUrl = url.parse(req.url,true);
  if(req.method === 'OPTIONS'){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.statusCode = 204;
    res.end();
  }else if(req.method === 'POST'){
    console.log('POST request send');
    assignRank(req,res);
  }else if(req.method === 'GET'){
    console.log('GET request send');
    callRank(req,res);
  }else{
    console.log('Undefined Method Send');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server runnning at http://127.0.0.1:3000');
});
