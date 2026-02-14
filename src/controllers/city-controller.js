const { CityService } = require('../services/city-service');
const { SuccessCodes } = require('../utils/error-codes');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body)
        res.status(SuccessCodes.CREATED).json(
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

const getAll = async (req, res) => {
    try {
        const response = await cityService.getAll(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        });
    } catch ( error ) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch all cities',
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
};
