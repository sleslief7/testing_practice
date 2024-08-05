const calculator = (() => {
  function add(numOne, numTwo) {
    return numOne + numTwo;
  }

  function subtract(numOne, numTwo) {
    return numOne - numTwo;
  }

  function divide(numOne, numTwo) {
    return numOne / numTwo;
  }

  function multiply(numOne, numTwo) {
    return numOne * numTwo;
  }

  return { add, subtract, divide, multiply };
})();

module.exports = calculator;
