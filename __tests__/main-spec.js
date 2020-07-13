const main = require('../main');

describe('Check cute number', () => {
    it('should return true when check cute number given a set includes 20',
    () => {
        let numbers = [0, 1, 10, 13, 20];

        let cuteNumber = main.checkCuteNumber(numbers);

        expect(cuteNumber).toBe(true);
    });

    it('should return false when check cute number given a set includes only odd numbers',
    () => {
        let numbers = [0, 1, 11, 13, 21];

        let cuteNumber = main.checkCuteNumber(numbers);

        expect(cuteNumber).toBe(false);
    });

    it('should return false when check cute number given a set with max event number as 8',
    () => {
        let numbers = [0, 1, 8, 13, 21];

        let cuteNumber = main.checkCuteNumber(numbers);

        expect(cuteNumber).toBe(false);
    });

    it('should return false when check cute number given an empty set',
    () => {
        let numbers = [];

        let cuteNumber = main.checkCuteNumber(numbers);

        expect(cuteNumber).toBe(false);
    });
});