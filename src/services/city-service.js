const { CityRepository } = require('../repository/index')

class CityService {
    constructor() {
        this.CityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Error creating city, check city-service.js");
            throw error;
        }
    }

    async deleteCity(cityID) {
        try {
            const response = await this.CityRepository.deleteCity(cityID);
            return response;
        } catch (error) {
            console.log("Error deleting city, check city-service.js");
            throw error;
        }
    }

    async updateCity(cityID, data) {
        try {
            const city = await this.CityRepository.updateCity(cityID, data);
            return city;
        } catch (error) {
            console.log("Error updating city, check city-service.js");
            throw error;
        }
    }

    async getCity(cityID) {
        try {
            const city = await this.CityRepository.getCity(cityID);
            return city;
        } catch (error) {
            console.log("Error getting city, check city-service.js");
            throw error;
        }
    }
}

module.exports = CityService;