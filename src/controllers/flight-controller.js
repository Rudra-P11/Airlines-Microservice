const { FlightService } = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        let flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: "Successfully created a flight",
            err: {}
        });
    } catch(error){
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create a flight",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try{
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all flights",
            err: {}
        });
    } catch(error){
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch flights",
            err: error
        });
    }
}

module.exports = {
    create,
    getAll
}