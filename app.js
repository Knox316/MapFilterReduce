data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];

//Our filter method takes the pet as input and will return true on a an animal if its type is equal to dog:
//Our map function will simply return the animals age multiplied by 7:
//Our reduce function will return the sum of our animals age and the current sum:


let isDog = (animal) => {
    return animal.type === 'dog';
  }

let dogYears = (animal) => {
  return animal.age * 7;
}

let sum = (sum, animal) => {
  return sum + animal;
}

let ages = data
  .filter(isDog)
  .map(dogYears)
  .reduce(sum);

console.log(ages);s