const { MutantRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose");//.default;
const { Mutant } = require("../../../src/models");
let { MutantModelMock: { mutant, mutants, mutantCreate } } = require("../../mocks");

describe("Mutant Repository Test", () => {
    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks();
    });

   it("Should return a mutant collection", async () => {
       mutants = mutants.map(mutant => {
           return mutant;
       });

       mockingoose(Mutant).toReturn(mutants, "find");

       const _mutantRepository = new MutantRepository({ Mutant });
       const expected = await _mutantRepository.getAll();

       expect(JSON.parse(JSON.stringify(expected))).toMatchObject(mutants);
   });
});