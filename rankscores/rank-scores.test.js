const rankScores = require('./rank-scores');

test('return the result table ordered by score in descending order', () => {
    expect(rankScores([3.50, 4.00, 3.65, 3.65, 3.85, 4.00], [1,2,3,4,5,6])).toStrictEqual([1,1,2,3,3,4])
})

