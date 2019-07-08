const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');
const cors = require ('cors');
const passport = require ('passport');
const mongoose = require ('mongoose');
const config = require('./config/database');

mongoose.connect('mongodb://localhost:27017/mean',{useNewUrlParser:true});

mongoose.connection.on("connected", ()=>{
    console.log("Connected to database "+config.database )
})

mongoose.connection.on("error", (err)=>{
    console.log("error database "+config.database )
})

const app = express();
const users = require('./routes/users');

const port = 3000;
app.use(cors());

//Set static Folder
app.use(express.static(path.join(__dirname, "public")));

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
