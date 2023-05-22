const autobus = require('./autobus')

test('calculate the minimum and maximum number of buses that can be in the fleet, if you have 24 wheels', () =>{
    expect(autobus(24)).toStrictEqual(["Number of buses with 2 axles: 6", "Number of buses with 3 axles: 4", "Number of buses with 3 axles: 2, Number of buses with 2 axles: 3"])
})