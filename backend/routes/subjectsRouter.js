const express = require('express');
const subjectRouter = express.Router();
const Subjects = require('../infra/models/subjects/subjects.js');

subjectRouter.get('/', async (req, res) => {

    try {
        const subjects = await Subjects.find();
        res.status(200).json(subjects);

    } catch (error) {
        res.status(500).json({ Error: error })

    }
});

module.exports = subjectRouter;