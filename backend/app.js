const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const dbConnection = require('./infra/database/connect.js');

const studentRouter = require('./routes/studentRouter.js');
const classRouter = require('./routes/classRouter.js');
const subjectsRouter = require('./routes/subjectsRouter.js');

app.use('/student', studentRouter);
app.use('/class', classRouter);
app.use('/subjects', subjectsRouter);

app.listen(3000, () => {
    console.log('Running!')
})