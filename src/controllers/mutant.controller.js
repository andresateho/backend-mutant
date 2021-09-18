const wordSearchSolver = require('word-search-solver');
const errorMiddleware = require('../middlewares/error.middleware');
let _mutantService = null;

class MutantController{
    constructor({ MutantService }){
        _mutantService = MutantService;
    }

    async getAll(req, res){
        let count_mutant_dna_cont = 0;
        let count_human_dna_cont = 0;

        let mutants = await _mutantService.getAll();
        mutants = mutants.map(result => {
            if (result.isMutant)
                count_mutant_dna_cont ++;          
            else
                count_human_dna_cont ++;
        });
    
        return res.send(
            { 
                count_mutant_dna: count_mutant_dna_cont,
                count_human_dna: count_human_dna_cont,
                ratio: (count_mutant_dna_cont * 100) / (count_mutant_dna_cont + count_human_dna_cont)
            }
        );
    }

    async create(req, res){
        const { body } = req;

        const newArray = _mutantService.createArray(body);
        const words = ['AAAA','TTTT', 'CCCC', 'GGGG'];
        
        const solution = await wordSearchSolver(newArray, words);

        const isMutant = _mutantService.validateMutant(solution);
        body.isMutant = isMutant;

        await _mutantService.create(body);

        if(isMutant){
            return res.send();
        }else{
            return res.status(403).send();
        }            
    }
}

module.exports = MutantController;