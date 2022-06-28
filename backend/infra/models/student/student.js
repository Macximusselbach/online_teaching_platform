const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true

    },
    phone: {
        type: String,
        required: true
        
    },
    cpf: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true

    },
    class: {
        type: String,
        required: false

    }

});

module.exports = mongoose.model('Student', studentSchema)