const mongoose = require('mongoose');


const classSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true

    },
    students: {
        type: Array,
        required: false

    },
    subjects: {
        type: Array,
        required: false
    }

});

module.exports = mongoose.model('Class', classSchema);