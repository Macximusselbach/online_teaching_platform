const express = require('express');
const classRouter = express.Router();
const Class = require('../infra/models/class/class.js');

classRouter.get('/class', async (req, res) => {

    try {
        const classes = await Class.find();
        res.status(200).json(classes);

    } catch (error) {
        res.status(500).json({ Error: error })

    }
});

classRouter.get('/class/:id', async (req, res) => {

    try {
        const classFound = await Class.findById(req.params.id);

        if (!classFound) {
            res.status(404).json({ Message: 'Class not found!' })
            return
        }

        res.status(200).json(classFound);

    } catch (error) {
        res.status(500).json({ Error: error })

    }
});

classRouter.post('/class', async (req, res) => {

    try {

        const newClass = new Class({

            name: req.body.name
    
        });

        const savedClass = await Class.create(newClass);
        res.status(201).json(savedClass);

    } catch (error) {
        res.status(500).json({ Error: error })

    }
});

module.exports = classRouter;