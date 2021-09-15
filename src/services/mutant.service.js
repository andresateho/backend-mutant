const BaseService = require("./base.service");
let _mutantRepository = null;

class MutantServices extends BaseService{
    constructor({ MutantRepository }){
        super(MutantRepository);
        _mutantRepository = MutantRepository;
    }
}

module.exports = MutantServices;