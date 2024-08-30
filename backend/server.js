const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const port = 8000;
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "register"
});

const laravelDb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "laravel"
});

db.connect((err) => {
  if (err) {
      console.error('Error connecting to the database:', err);
      return;
  }
  console.log('Connected to the database');
});

// Login route
app.post('/user/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
  }
  const query = "SELECT * FROM `fnew` WHERE `name` = ? AND `pass` = ?";
  db.query(query, [email, password], (err, result) => {
      if (err) {
          console.error('Database query error:', err);
          return res.status(500).json({ error: 'Database query error' });
      }
      if (result.length > 0) {
          const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: "1800s" });
          return res.status(200).json({ message: "User Logged in Successfully", token });
      } else {
          return res.status(401).json({ error: 'Invalid credentials' });
      }
  });
});

app.post('/deleteRow', (req, res) => { 
  const id = req.body.id; // req.body is used in POST requests
  const deleteQuery = 'UPDATE `cities` SET `park` = 1 WHERE `id`=?';

  laravelDb.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error("query error or no data found");
      return res.json({ error: '1', data: "query error or no data found" }); // Error code should be '1' for error
    }
    if (result) {
      return res.json({ error: '0', data: 'successfully Deleted' });
    }
  });
});


app.get('/getTable',(req,res)=>{ // to get all the table data
  laravelDb.query('SELECT * FROM `cities` WHERE `park` = 0',(err,result)=>{
    if(err){
      console.error("query error or no data found");
      res.json({error:'0',data:"query error or no data found"})
    }
    if(result.length>0){
      return res.json({error:'0',data:result});
    }
  })
});


app.get('/', (req, res) => {
  console.log(req);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});