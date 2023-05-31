const reverseLinkedListII = require('./reverse-linked-list-ii');

test('reverse the index of the array from position 2 to position 4' , () => {
    expect(reverseLinkedListII([1,2,3,4,5],2,4)).toStrictEqual([1,4,3,2,5])
}) 
test('return the same array' , () =>{
    expect(reverseLinkedListII([5],1,1)).toStrictEqual([5])
})
