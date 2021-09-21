const { MutantService } = require("../../../src/services");
const { MutantRepositoryMock, MutantServiceMock } = require("../../mocks");
let { 
    MutantModelMock: { 
        mutant, 
        mutants, 
        mutantCreate 
    },
    MutantServiceMock: { 
        mutantArray 
    },
    MutantControllerMock: { 
        solutionSuccess, 
        solutionNotSuccess
    }
} = require("../../mocks");

describe("Mutant Service", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Should return a mutant collection", async () => {
        const MutantRepository = MutantRepositoryMock;
        MutantRepository.getAll.mockReturnValue(mutants);
    
        const _mutantService = new MutantService({ MutantRepository });
        const expected = await _mutantService.getAll();
        expect(expected).toMatchObject(mutants);
    });

    it("Should create a mutant", async () => {
        const MutantRepository = MutantRepositoryMock;
        MutantRepository.create.mockReturnValue(mutant);
    
        const _mutantService = new MutantService({ MutantRepository });
        const expected = await _mutantService.create(mutantCreate);
        expect(expected).toMatchObject(mutant);
    });

    it("Should return an array", () => {
        const MutantRepository = MutantRepositoryMock;

        MutantServiceMock.createArray.mockReturnValue(mutantArray);
    
        const _mutantService = new MutantService({ MutantRepository });
        const expected = _mutantService.createArray(mutant);
        expect(expected).toMatchObject(mutantArray);
    });

    it("Should return true if more than one valid sequence is found", () => {
        const MutantRepository = MutantRepositoryMock;
    
        const _mutantService = new MutantService({ MutantRepository });
        const expected = _mutantService.validateMutant(solutionSuccess);
        expect(expected).toBe(true);
    });

    it("Should return false if one or less of a valid sequence is found", () => {
        const MutantRepository = MutantRepositoryMock;
    
        const _mutantService = new MutantService({ MutantRepository });
        const expected = _mutantService.validateMutant(solutionNotSuccess);
        expect(expected).toBe(false);
    });
});