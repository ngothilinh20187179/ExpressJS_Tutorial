const express = require('express');
const app = express();
const PORT = 3000;

const basicRoutes = require('./routing/basic');
const parameterRoutes = require('./routing/parameters')
const chaining = require('./routing/chaining');
const errorHandling = require('./error_handling/basic');
const file_handling = require('./files_handling/index');

// Built-in Middleware
app.use(express.json()); // Parses JSON data for every incoming request

// Application-level Middleware (before any routes)
app.use((req, res, next) => { // Log for every incoming request
    console.log('Time:', Date.now());
    console.log('Request URL:', req.originalUrl);
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Express Multiple Routes Server!');
});
app.use('/basic', basicRoutes);
app.use('/parameters', parameterRoutes);
app.use('/chaining', chaining);
app.use('/error', errorHandling);

// Router-level
const premiumRoutes = express.Router();
premiumRoutes.use((req, res, next) => {
    const user = req.query.user || 'standard';
    if (user != 'premium') {
        return res.status(403).send('Access denied. Premium members only.');
        // http://localhost:3000/premium/content
    }
    console.log('Premium Route Accessed:', req.originalUrl);
    next();
});
premiumRoutes.get('/content', (req, res) => {
    res.send('This is your exclusive content');
    // http://localhost:3000/premium/content?user=premium
});
app.use('/premium', premiumRoutes);
app.use('/files', file_handling);

// Error-handling Middleware (ALWAYS AT THE END)
app.use((err, req, res, next) => {
    console.log("Test:", err.stack);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});  