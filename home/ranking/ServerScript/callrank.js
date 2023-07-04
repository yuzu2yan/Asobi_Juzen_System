/*************************************************************
***Designer             : Shogo Imanaka
***Date                 : 2023/7/2
***Purpose              : Connect to SQL Database
**************************************************************/
//**execute in server
const mysql = require('mysql2');
const url = require('url');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'pracb2023',
  database: 'ranking'
});

const callRank = function (req, res) {
  try {
    const queryObject = url.parse(req.url,true).query;
    const gameId = queryObject.game_id;
    connection.query('SELECT * FROM rankingData WHERE game_id = ? ORDER BY score DESC',[gameId], function (error, results, fields) {
      if (error){
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: error.message }));
      }else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(results));
      }
    });
  } catch (error) {
    res.writeHead(500, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ error: error.message }));
  }
}

module.exports = callRank;