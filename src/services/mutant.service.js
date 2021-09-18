const BaseService = require("./base.service");
let _mutantRepository = null;

class MutantServices extends BaseService{
    constructor({ MutantRepository }){
        super(MutantRepository);
        _mutantRepository = MutantRepository;
    }

    createArray (req){
        let newArray = new Array(req.dna.length);

        for(let i=0; i<req.dna.length; i++) {
            let array = req.dna[i].split('');
            newArray[i] = array;
        }

        return newArray;
    }

    validateMutant (req){
        let num = 0;
        let mutant = false;

        req.map(valueTrue => valueTrue.found == true ? num++ : num);
        
        if(num > 1){
            mutant = true;
        }            

        return mutant;
    }
}

module.exports = MutantServices;