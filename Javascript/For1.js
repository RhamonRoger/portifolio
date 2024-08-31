// Usando for...in com um objeto
const person = { name: 'John', age: 30, city: 'New York' };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Usando for...of com um array
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}

// Usando forEach com um array
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
