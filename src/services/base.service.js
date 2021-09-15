class BaseService {
    constructor(repository){
        this.repository = repository;
    }

    async getAll(){
        return await this.repository.getAll();
    }

    async create(entity){
        return await this.repository.create(entity);
    }
}

module.exports = BaseService;