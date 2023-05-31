// https://leetcode.com/problems/candy/ ZROBIONE
function candy(ratings) {
    ratings.sort()
    var result = ratings.length;
    for(let i=0; i<ratings.length; i++){
        if(ratings[i] < ratings[i+1]){
            result++
        }
    }
    return result
}

candy([1,0,2])