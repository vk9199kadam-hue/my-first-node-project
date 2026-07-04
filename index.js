// 1. Import Express library
const express = require('express');

// 2. Create a new server app
const app = express();

// 3. Set a port number (like a door number for your server)
const PORT = 3000;

// 4. Create a route (what happens when someone visits your server)
app.get('/', (req, res) => {
    res.send('Hello! This is my first server!');
});

// 5. Start the server and listen for visitors
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});