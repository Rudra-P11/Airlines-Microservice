const { CityService } = require('../services/city-service');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body)
        res.status(201).json(
            {
                data: city,
                success: true,
                message: 'Successfully created a city',
                err: {}
            }
        );
    } catch ( error ) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to create a city',
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted city',
            err: {}
        });
    } catch ( error ) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to delete city',
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated city',
            err: {}
        });
    } catch ( error ) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to update city',
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched city',
            err: {}
        });
    } catch ( error ) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch city',
            err: error
        })
    }
}