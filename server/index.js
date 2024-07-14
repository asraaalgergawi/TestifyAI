require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connection = require("./config/db");

const app = express();

// الاتصال بقاعدة البيانات
connection();

// الوسائط
app.use(express.json());
app.use(cors());

// إعداد CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// تقديم الملفات الثابتة الخاصة بـ React
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, console.log(`Listening on port ${port}...`));
