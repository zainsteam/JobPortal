var http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const mongoose = require('mongoose');
const config = require('./config/database');

//connected to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', () => {
    console.log('connected to database'+config.database);
});

//on error
mongoose.connection.on('err', (err) => {
    console.log('Database err '+err);
});

const app = express();

const users = require('./routes/users');
const orgusers = require('./routes/org');
const job = require('./routes/job');
const qbank = require('./routes/qb');

//cors midleware
app.use(cors());

//bodyParser midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//passport midleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);
app.use('/organisation',orgusers);
app.use('/job',job);
app.use('/qbank',qbank);

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

//index route
app.get('/', (req,res) =>{
    res.send('Invalid Endpoint');
});

app.get('*', (req , res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//port number

const port = process.env.PORT || 3000;

//start server
 app.listen(port, () => {
     console.log('server started on Port '+port);
 });

