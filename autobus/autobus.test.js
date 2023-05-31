const autobus = require('./autobus');

test('return array with all combinations of the number of buses', () => {
    expect(autobus(24)).toStrictEqual(["Number of buses with 2 axles: 6", "Number of buses with 3 axles: 4", "Number of buses with 3 axles: 2, Number of buses with 2 axles: 3"])
})
