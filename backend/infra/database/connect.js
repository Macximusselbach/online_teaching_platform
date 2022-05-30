const mongoose = require('mongoose');
require('dotenv').config();
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(`${CONNECTION_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('Database connected!');

}).catch((error) => {
    console.log(error);

});

