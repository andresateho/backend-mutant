const BaseRepository = require("./base.repository");
let _mutant = null;

class MutantRepository extends BaseRepository {
    constructor({ Mutant }){
        super(Mutant);
        _mutant = Mutant;
    }
}

module.exports = MutantRepository;