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

  // Validate request data
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


  // db.query("SELECT * FROM `fnew` WHERE `name` = ? AND `pass` = ?", [req.body.email, req.body.password])
  //   .then(query => {
  //     console.log(query.sql);
  //     return res.json(query.sql);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //     return res.json(error);
  //   });
  // const sqlQuery = "SELECT * FROM `fnew` WHERE `name` = ? AND `pass` = ?";
  // const values = [
  //   req.body.email,
  //   req.body.password
  // ]
  // // console.log(db.query(sqlQuery,[values]));
  // db.query(sqlQuery, [values], (err, data) => {
  //   if (err) return res.json("Login Faield");
  //   const accessToken = {
  //     email: req.body.email,
  //     pass: req.body.password,
  //   }
  //   jwt.sign({ accessToken: data }, 'nahidkhan9144@', (err, token) => {
  //     // res.json({
  //     //   ,
  //     // })
  //   })
    // return res.json(token, data);
  // })
  // res.status(200).send({ message: 'Hello World! /user/register' });
// });

app.get('/', (req, res) => {
  console.log(req);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});