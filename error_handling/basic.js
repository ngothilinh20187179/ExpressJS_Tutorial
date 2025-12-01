const express = require('express');
const router = express.Router();

// 500 - Internal Server Error
router.get('/500', (req, res) => {
    throw new Error('Something went wrong!');
});

// 400 - Bad Request
router.get('/400', (req, res) => {
    res.status(400).send('Bad Request: The server could not understand the request due to invalid syntax.');
});

// 401 - Unauthorized
router.get('/401', (req, res) => {
    res.status(401).send('Unauthorized: Access is denied due to invalid credentials.');
});

// 403 - Forbidden
router.get('/403', (req, res) => {
    res.status(403).send('Forbidden: You do not have permission to access this resource.');
});

// 404 - Not Found
router.get('/404', (req, res) => {
    res.status(404).send('Not Found: The requested resource could not be found on this server.');
});

// next(err) function -> Pass error to error-handling middleware
router.get('/pass-err', (req, res, next) => {
    const err = new Error('Something went wrong!');
    err.status = 500;
    next(err);
});

// try...catch -> Handle synchronous errors
router.get('/sync-err', (req, res, next) => {
    try {
        throw new Error('Synchronous error occurred!');
    } catch (err) {
        next(err);
    }
});

// async/await & try...catch -> Handle asynchronous errors
router.get('/async-err', async (req, res, next) => {
    try {
        await Promise.reject(new Error('Asynchronous error occurred!'));
    } catch (err) {
        next(err);
    }
});

module.exports = router;