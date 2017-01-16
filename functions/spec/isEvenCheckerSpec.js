const isEven = require('../isEvenChecker')

describe('isEvenChecker Tests', function (){
  it('should return false when input is 1', function () {
    expect(isEven(1)).toEqual(false);
  });
  it('should return true when input is 2', function () {
    expect(isEven(2)).toEqual(true);
  });
})
