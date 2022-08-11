var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('Output of 5! will return 120', () => 
    {
      //  SetUp
      const inputNumber = 5;
      const expectedNumber = 120;

      //  Exercise
      const actualNumber = Calculate.factorial(inputNumber);

      //  Verify
      assert.equal(actualNumber, expectedNumber);
    });

    it('3! will return 6', () => {
      //  Setup
      const inputNumber = 3;
      const expectedNumber = 6;
      //  Exercise
      const actualNumber = Calculate.factorial(inputNumber);
      //  Verify
      assert.equal(actualNumber, expectedNumber);
    });

    it('returns 1 when you pass in 0', () => {
      //  Setup
      const inputNumber = 0;
      const expectedNumber = 1;
      //  Exercise
      const actualNumber = Calculate.factorial(inputNumber);
      //  Verify
      assert.equal(actualNumber, expectedNumber);
    });
  });
});
