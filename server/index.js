const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3307;

const db = mysql.createConnection({
  host: '127.0.0.1',  //  localhost라고 하게 되면 에러가 뜬다. 127.0.0.1과 localhost는 같다는거 같다.
  user: 'root',
  password: 'oo991128',
  database: 'INMATE',
  port: port
});
db.connect();
app.get("/", (req, res) => {
  db.query("SELECT * FROM restaurant_list", (err, result) => {
    if (err) {
      res.send(err, 'check');
    }
    console.log(result)
  })
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});