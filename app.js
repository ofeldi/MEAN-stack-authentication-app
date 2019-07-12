const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');
const cors = require ('cors');
const passport = require ('passport');
const mongoose = require ('mongoose');

const db = require('./config/database').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true, useFindAndModify: false})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const app = express();
const users = require('./routes/users');

const port = 3000;
app.use(cors());

//Set static Folder
app.use(express.static(path.join(__dirname, "public")));

//Body Parser Middleware

app.use(bodyParser.json());

//Pasport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use('/users',users);

//Index Rout
app.get('/',(req,res) =>{
  res.send("invalid endpoint");
});
app.listen(port, ()=>{
    console.log("Server Started on port " + port);
})
