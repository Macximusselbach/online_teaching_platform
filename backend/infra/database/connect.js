const mongoose = require('mongoose');
const configs = require('./config.js');

mongoose.connect(configs.connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('Database connected!');

}).catch((error) => {
    console.log(error);

});

