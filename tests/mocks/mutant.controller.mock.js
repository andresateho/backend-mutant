module.exports = {
    wordSearchSolver: jest.fn(),
    solutionSuccess: [
        {word: 'AAAA', found: true, firstLetter: Array(2), lastLetter: Array(2)},
        {word: 'TTTT', found: false},
        {word: 'CCCC', found: true, firstLetter: Array(2), lastLetter: Array(2)},
        {word: 'GGGG', found: true, firstLetter: Array(2), lastLetter: Array(2)}
    ],
    solutionNotSuccess: [
        {word: 'AAAA', found: false},
        {word: 'TTTT', found: false},
        {word: 'CCCC', found: false},
        {word: 'GGGG', found: true, firstLetter: Array(2), lastLetter: Array(2)}
    ],
    response: {
        "count_mutant_dna": 1,
        "count_human_dna": 1,
        "ratio": 50
    }
}