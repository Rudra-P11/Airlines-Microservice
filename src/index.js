const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig')
const ApiRoutes = require('./routes/index')

const setupAndStartServer = async () => {
    // Create an instance of the Express application
    const app = express();
    // Middleware to parse JSON bodies
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

setupAndStartServer();