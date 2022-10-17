const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
import db from './private_setting';

app.use(cors());
app.listen(3000, () => {
  console.log('listening on 3000')
})

db.connect();

app.use(cors());

//  restaurant_list 쿼리에서 요청이 들어오면 db에서 데이터를 보냄
app.get("/restaurant_list", (req, res) => {
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