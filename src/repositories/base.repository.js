class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async getAll(){
        return await this.model.find();
    }

    async create(entity){
        return await this.model.create(entity);
    }
}

module.exports = BaseRepository;