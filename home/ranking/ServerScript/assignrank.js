/*************************************************************
***Designer             : Shogo Imanaka
***Date                 : 2023/7/2
***Purpose              : Add new data to an SQL database
**************************************************************/
//**execute in server
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'pracb2023',
  database: 'ranking'
});

const assignRank = function (req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const data = JSON.parse(body);
    const query = 'INSERT INTO rankingData (game_id, score) VALUES (?, ?)';
    connection.query(query, [data.game_id, data.score], (error, results, fields) => {
      if (error){
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Data registered successfully' }));
    });
  });
}

module.exports = assignRank
