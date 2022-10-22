const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) =>{
    res.send('hello thanapon tt');
})

app.listen(port, ()=>{
    debug("listening on port " + chalk.green(port));
})