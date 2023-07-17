const productOfArrayExceptSelf = require('./product-of-array-except-self');

test('multiplying all index values without the current index' , () =>{
    expect(productOfArrayExceptSelf([1,2,3,4])).toStrictEqual([24,12,8,6])
})
test('multiplying all index values without the current index' , () =>{
    expect(productOfArrayExceptSelf([-1,1,0,-3,3])).toStrictEqual([0,0,9,0,0])
})