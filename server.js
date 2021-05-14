var express = require('express');
var cors = require('cors');
require('dotenv').config()
var multer = require('multer')
var upload = multer()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.any(),
(req, res)=>{
  let response = {
    name: req.files[0].originalname,
    type: req.files[0].mimetype,
    size: parseInt(req.files[0].size)
  }
  console.log(response);
  res.json(response);
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});