const numbers = [1, 2, 3, 4, 5];

const reducer = (accumulator, currentValue, currentIndex, array) => {
  console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}, Current Index: ${currentIndex}, Array: ${array}`);
  return accumulator + currentValue;
};

const sum = numbers.reduce(reducer, 0);

console.log(sum); // Saída: 15