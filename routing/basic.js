const express = require('express');
const router = express.Router();

router.get('/get-example', (req, res) => {
    res.send('This is a basic GET request');
});

router.post('/post-example', (req, res) => {
    res.send('This is a basic POST request');
});

router.put('/put-example', (req, res) => {
    res.send('This is a basic PUT request');
});

router.delete('/del-example', (req, res) => {
    res.send('This is a basic DEL request');
});

module.exports = router