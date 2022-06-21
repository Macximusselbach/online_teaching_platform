const express = require('express');
const studentRouter = express.Router();
const Student = require('../infra/models/student/student.js');

studentRouter.get('/', async (req, res) => {

    try {
        const students = await Student.find();
        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({ Error: error })

    }
});

studentRouter.get('/:id', async (req, res) => {

    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            res.status(404).json({ Message: 'Student not found!' })
            return
        }

        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({ Error: error })

    }
});

studentRouter.get('/cpf/:cpf', async (req, res) => {

    try {
        const student = await Student.find( {"cpf": req.params.cpf} );

        if (!student) {
            res.status(404).json({ Message: 'Student not found!' })
            return
        }

        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({ Error: error })

    }
});

studentRouter.post('/', async (req, res) => {

    const student = new Student({

        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        cpf: req.body.cpf,
        password: req.body.name + "12345"

    });

    try {

        const savedStudent = await Student.create(student);
        res.status(201).json(savedStudent);

    } catch (error) {
        res.status(500).json({ Error: error })

    }
});

module.exports = studentRouter;