const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created an airport",
            err: {}
        });
    }   catch(error){   
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create an airport, controller layer",
            err: error
        });
    }
}

module.exports = {
    create
}