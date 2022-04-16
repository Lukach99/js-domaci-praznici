const numArr = [1, 4, 2, 20, 5, 4, 25, 10, 3, 0, -1];

function max(numbersArray) {
  let index = 0;
  let num = numbersArray[0];
  numbersArray.forEach((number, i) => {
    if (number > num) {
      index = i;
      num = number;
    }
  });

  return index;
}

function min(numbersArray) {
  let index = 0;
  let num = numbersArray[0];
  numbersArray.forEach((number, i) => {
    if (number < num) {
      index = i;
      num = number;
    }
  });

  return index;
}

function sortNumbers(array, minMax) {
  const sortedArray = [];

  for (let i = 0; i < array.length; i++) {
    let numberIndex = minMax(array);
    sortedArray.push(array[numberIndex]);
    array.splice(numberIndex, 1);
    i--;
  }

  return sortedArray;
}

console.log(sortNumbers([...numArr], min));
console.log(numArr);

/* const ascending = [...numArr].sort((a, b) => a - b);
const descending = [...numArr].sort((a, b) => b - a);

console.log({ ascending, descending });
 */
