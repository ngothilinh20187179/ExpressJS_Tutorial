const express = require('express');
const router = express.Router();

// Route Parameters
router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
});

// Query Parameters
// http://localhost:3000/parameters/search?term=nodejs
router.get('/search', (req, res) => {
    const searchTerm = req.query.term;
    res.send(`Searching for ${searchTerm}`)
}) 

// Request Body Parameters
router.post('/users', (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            error: "Request body is missing"
        })
    }
    const { name, age } = req.body
    if (!name || !age) {
        return res.status(400).send({
            error: "Missing required fields"
        })
    }
    res.status(201).send(`User created: ${name}, Age: ${age}`)
})


module.exports = router;