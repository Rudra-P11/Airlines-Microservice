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
        } catch ( error ) {
            console.log("Error deleting city, check city-repositoty.js");
            throw error;
        }
    }
}



module.exports = CityRepository;