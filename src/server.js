'use strict';

const express = require('express');
const cors = require('cors');

const notFoundHandler= require('./error-handlers/404');
const errorHandler= require('./error-handlers/500');
const logger = require('./middleware/logger');
const clothesRouter = require('./routes/clothes');


const app = express();

app.use(express.json());
app.use(cors());

app.use(logger);
app.use(clothesRouter);




function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}


app.use('/', (req, res)=>{
    res.send('server is running');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}