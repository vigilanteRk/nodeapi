// Server
const express = require('express');
const MongoClient = require('mongodb').MongoClient; // to interact with db
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express(); // instance of express framework

// listing to httpp:requests
const port = 8000;

// body-parser package
app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    //  importing master routes
    require('./app/routes')(app, database);
    app.listen(port, () => {
    console.log('We are live on ' + port);
});
});