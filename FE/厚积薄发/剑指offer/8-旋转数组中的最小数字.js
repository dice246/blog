/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[0]) {
      return numbers[i]
    }
  }

  return numbers[0];
};
