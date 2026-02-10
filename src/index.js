const express = require('express');
const {PORT} = require('./config/serverConfig')


const setupAndStartServer = async () => {
    // Create an instance of the Express application
    const app = express();
    // Middleware to parse JSON bodies
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

setupAndStartServer();