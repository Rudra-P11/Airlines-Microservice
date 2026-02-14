class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try{
            const response = await this.model.create(data);
            return response;
        } catch(error){
            console.log("Something went wrong in the crud-repository layer");
            throw {error};
        }
    }

    async destroy(modelId){
        try{
            await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch(error){
            console.log("Something went wrong in the crud-repository layer");
            throw {error};
        }
    }

    async update(modelId, data){
        try{
            await this.model.update(data, {
                where: {
                    id: modelId}
            });
            return true;
        } catch(error){
            console.log("Something went wrong in the crud-repository layer");
            throw {error};
        }
    }

    async get(modelId){
        try{
            const response = await this.model.findByPk(modelId);
            return response;
        } catch(error){
            console.log("Something went wrong in the crud-repository layer");
            throw {error};
        }
    }

    async getAll(){
        try{
            const response = await this.model.findAll();
            return response;
        } catch(error){
            console.log("Something went wrong in the crud-repository layer");
            throw {error};
        }
    }
}

module.exports = CrudRepository;