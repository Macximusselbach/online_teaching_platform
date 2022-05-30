const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbConnection = require('./infra/database/connect.js');

const studentRouter = require('./routes/studentRouter.js');
const classRouter = require('./routes/classRouter.js');
const subjectsRouter = require('./routes/subjectsRouter.js');

app.use('/', studentRouter);
app.use('/', classRouter);
app.use('/', subjectsRouter);

app.listen(3000, () => {
    console.log('Running!')
})