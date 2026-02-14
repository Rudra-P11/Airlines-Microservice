const CrudRepository = require('./crud-repository');
const {AirportModel} = require('../models/index');

class AirportRepository extends CrudRepository{
    constructor(){
        super(AirportModel);
    }
};

module.exports = AirportRepository;