module.exports = {
    getAll: jest.fn(),
    create: jest.fn(),
    createArray: jest.fn(),
    validateMutant: jest.fn(),
    mutantArray: [
        ['A', 'T', 'G', 'C', 'G', 'A'],
        ['C', 'A', 'G', 'T', 'G', 'C'],
        ['T', 'T', 'A', 'T', 'G', 'T'],
        ['A', 'G', 'A', 'A', 'G', 'G'],
        ['C', 'C', 'C', 'C', 'T', 'A'],
        ['T', 'C', 'A', 'C', 'T', 'G']
    ]
}