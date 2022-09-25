function* fizzBuzzGenerator(max) {
  // Tu código acá:
  for (let i = 1; i < max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      yield `${i} FizzBuzz`;
    } else if (i % 3 === 0) {
      yield `${i} Fizz`;
    } else if (i % 5 === 0) {
      yield `${i} Buuz`;
    }
  }
}
let max = 50;
let generatorObject = fizzBuzzGenerator(max);
for (let i = i; i < max; i++) {
  console.log(generatorObject.next());
}

module.exports = fizzBuzzGenerator;
