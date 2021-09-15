let _mutantService = null;

class MutantController{
    constructor({ MutantService }){
        _mutantService = MutantService;
    }

    async getAll(req, res){
        const mutants = await _mutantService.getAll();
        return res.send(mutants);
    }

    async create(req, res){
        const { body } = req;
        const mutants = await _mutantService.create(body);
        return res.send(mutants);
    }
}

module.exports = MutantController;