const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig')
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () => {
    // Create an instance of the Express application
    const app = express();
    // Middleware to parse JSON bodies
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        // Example usage of CityRepository
        const cityRepo = new CityRepository();
        cityRepo.deleteCity({city_id : 1});
    });
}

setupAndStartServer();