const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());
app.listen(8080, () => {
  console.log('listening on 8080')
})

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})