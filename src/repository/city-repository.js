const { City } = require('../models')
const { Op } = require('sequelize');
class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Error creating city, something went wrong in the repository layer");  
            throw error;
        }
    }
    
    async deleteCity( {city_id} ) {
    try {
        await City.destroy({
            where: {
                id: city_id
                }
            });
            return true;
        } catch ( error ) {
            console.log("Error deleting city, something went wrong in the repository layer");
            throw error;
        }
    }

    async updateCity( {city_id, name} ) {
        try {
            const city = await City.findByPk(city_id);
            city.name = name;
            await city.save();
            return city;
        } catch ( error ) {
            console.log("Error updating city, something went wrong in the repository layer");
            throw error;
        }
    }

    async getCity( {city_id} ) {
        try {
            const city = await City.findByPk(city_id);
            return city;
        } catch ( error ) {
            console.log("Error fetching city, something went wrong in the repository layer");
            throw error;
        }  
    }     

    async getAll(filter) {
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch ( error ) {
            console.log("Error fetching all cities, something went wrong in the repository layer");
            throw error;
        }
    }
}



module.exports = CityRepository;