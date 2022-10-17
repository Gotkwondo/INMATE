const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');
// import { password } from './private_setting';
const secret = require('./private_setting.json');

//  식당 DB
const db = mysql.createConnection({
  host: secret.host,  //  localhost라고 하게 되면 에러가 뜬다. 127.0.0.1과 localhost는 같다는거 같다.
  user: secret.db_user,
  password: secret.db_password,
  database: secret.db_name,
  port: 3306  //  DB가 사용하는 포트 이용
});

app.use(cors());
app.listen(8080, () => {
  console.log('listening on 8080')
})

db.connect();

app.use(cors());

//  restaurant_list 쿼리에서 요청이 들어오면 db에서 데이터를 보냄
app.get("/maplist", (req, res) => {
  //  mysql에서 query를 이용해 Table의 정보를 SELECT해오는 query를 입력
  db.query("SELECT id,lat,lng,name,adress,number FROM restaurant_list", (err, result) => {
    if (err) {
      res.send(err, 'check');
    }
    res.send(result);
  })
});

//  express가 static 형식의 파일을 잘 사용하게끔 하는 코드
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})