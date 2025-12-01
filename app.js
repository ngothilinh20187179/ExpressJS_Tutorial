const express = require('express');
const app = express();
const PORT = 3000;

const basicRoutes = require('./routing/basic');
const parameterRoutes = require('./routing/parameters')
const chaining = require('./routing/chaining');

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/basic', basicRoutes); // Test: http://localhost:3000/basic/get-example
app.use('/parameters', parameterRoutes); // Test: http://localhost:3000/parameters/users/2
app.use('/chaining', chaining);

app.get('/', (req, res) => {
    res.send('Welcome to the Express Multiple Routes Server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});  