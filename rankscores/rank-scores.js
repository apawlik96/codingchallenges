// https://leetcode.com/problems/rank-scores/description/
function rankScores(score, id){
	score.sort().reverse()
	const mySet = new Set(score)
    const length = mySet.size
    id.splice(length)
    let result = []
    for(let i=0; i<id.length; i++){
        result.push(i+1)
    }
    for(let i=0; i<score.length; i++){
        if(score[i] === score[i+1]) result.push(i)
    }
    result.sort()
    if(result[0] === 0 ) result.splice(0,1,1)
    return result
}

rankScores([3.50, 4.00, 3.65, 3.65, 3.85, 4.00], [1,2,3,4,5,6])

module.exports = rankScores