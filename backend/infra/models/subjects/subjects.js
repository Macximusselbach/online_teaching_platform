const mongoose = require('mongoose');


const subjectsSchema = new mongoose.Schema({

    subjects: {
        type: Array,
        required: false

    },

});

module.exports = mongoose.model('Subjects', subjectsSchema);