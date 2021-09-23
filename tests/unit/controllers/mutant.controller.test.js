const { MutantController } = require("../../../src/controllers");
const { MutantServiceMock, MutantControllerMock } = require("../../mocks");
let { 
    MutantModelMock: {
        mutants, 
        mutantCreate 
    },
    MutantServiceMock: { 
        mutantArray 
    },
    MutantControllerMock: { 
        solutionSuccess,
        response
    }
} = require("../../mocks");

describe("Mutant Controller Test", () => {
    let mRes;
    beforeEach(() => {
        mRes = { status: jest.fn().mockReturnThis(), send: jest.fn(), json: jest.fn() };
        jest.clearAllMocks();
    });

    it("Should return all the information from the database and calculate the expected values", async () => {
        const MutantService = MutantServiceMock;
        MutantService.getAll.mockReturnValue(mutants);
        mRes.send.mockReturnValue(response);
    
        const _mutantController = new MutantController({ MutantService });
        const expected = await _mutantController.getAll(null, mRes);
        expect(expected).toMatchObject(response);
    });

    it("Should return 200 if mutant", async () => {
        const mReq = { 
            body:{
                dna: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"],
            }
        };
        const MutantService = MutantServiceMock;
        MutantService.createArray.mockReturnValue(mutantArray);
        await MutantControllerMock.wordSearchSolver.mockReturnValue(solutionSuccess);
        MutantService.validateMutant.mockReturnValue(true);
        await MutantService.create.mockReturnValue(mutantCreate);
    
        const _mutantController = new MutantController({ MutantService });
        await _mutantController.create(mReq, mRes);
        expect(mRes.send).toBeCalled();
    });

    it("Should return 403 if not mutant", async () => {
        let res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
        const mReq = { 
            body:{
                dna: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"],
            }
        };
        const MutantService = MutantServiceMock;
        MutantService.createArray.mockReturnValue(mutantArray);
        await MutantControllerMock.wordSearchSolver.mockReturnValue(solutionSuccess);
        MutantService.validateMutant.mockReturnValue(false);
        await MutantService.create.mockReturnValue(mutantCreate);  
    
        const _mutantController = new MutantController({ MutantService });
        await _mutantController.create(mReq, res);
        expect(mRes.send).not.toBeCalled();
    });
});