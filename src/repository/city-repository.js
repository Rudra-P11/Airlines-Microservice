const { City } = require('../models')

class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Error creating city, check city-repositoty.js");  
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
            console.log("Error deleting city, check city-repositoty.js");
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
            console.log("Error updating city, check city-repositoty.js");
            throw error;
        }
    }

    async getCity( {city_id} ) {
        try {
            const city = await City.findByPk(city_id);
            return city;
        } catch ( error ) {
            console.log("Error fetching city, check city-repositoty.js");
            throw error;
        }  
    }     
}



module.exports = CityRepository;