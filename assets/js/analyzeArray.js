/*
An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const object = analyzeArray([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};

*/

const analyzeArray = (array) => {
  return {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return {};
};

export default analyzeArray;
