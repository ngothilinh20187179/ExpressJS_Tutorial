const express = require('express');
const router = express.Router();

router.route('/items')
    .get((req, res) => {
        res.send('Get all items')
    })
    .post((req, res) => {
        const { name } = req.body;
        if(!name) {
            return res.status(400).send('Name is required');
        }
        res.status(201).send('Item created')
    })
    .put((req, res) => {
        res.send('Updated Items')
    })
    .delete((req, res) => {
        res.status(204).send('Deleted all items')
    })

module.exports = router;