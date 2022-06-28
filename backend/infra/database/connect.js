const mongoose = require('mongoose');
// require('dotenv').config();
const CONNECTION_URL = 'mongodb+srv://admin:1718@onlineschoolplatform.2ucvy.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(`${CONNECTION_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('Database connected!');

}).catch((error) => {
    console.log(error);

});

