const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path')
const app = express();
const port = 3307;

const db = mysql.createConnection({
  host: '127.0.0.1',  //  localhost라고 하게 되면 에러가 뜬다. 127.0.0.1과 localhost는 같다는거 같다.
  user: 'root',
  password: 'oo991128',
  database: 'INMATE',
  port: port  //  DB가 사용하는 포트 이용
});
db.connect();

app.use(cors());

//  기본 주소로 접속 시 서버는 아래의 동작을 한다.
app.get("/restaurant_list", (req, res) => {
  //  mysql에서 query를 이용해 Table의 정보를 SELECT해오는 query를 입력
  db.query("SELECT id,lat,lng,name,adress,number FROM restaurant_list", (err, result) => {
    if (err) {
      res.send(err, 'check');
    }
    res.send(result);
  })
});
// app.use(express.static(path.join(__dirname, '../build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'))
//                                     //  이쪽에 가져올 파일을 적어둔다
// })
app.listen(port, () => {
  console.log(`running on port ${port}`);
});