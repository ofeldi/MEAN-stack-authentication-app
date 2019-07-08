const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');
const cors = require ('cors');
const passport = require ('passport');
const mongoose = require ('mongoose');

const app = express();
const users = require('./routes/users');

const port = 3000;
app.use(cors());

//Body Parser Middleware

app.use(bodyParser.json());
app.use('/users',users);
//Index Rout
app.get('/',(req,res) =>{
  res.send("invalid endpoint");
});
app.listen(port, ()=>{
    console.log("Server Started on port " + port);
})
