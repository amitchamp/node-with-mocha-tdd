function add(numbers = '') {
  let sumOfNumber = 0;
  let splitCharacter = ',';
  let negativeNumberExist = '';

  if (numbers === '') {
    return sumOfNumber;
  }

  if (numbers.startsWith('//')) {
    splitCharacter = numbers[2];
    numbers = numbers.slice(3);
  }

  const numbersInArray = numbers
    .split('\n')
    .join(splitCharacter)
    .split(splitCharacter);

  numbersInArray.forEach((number) => {
    if (number) {
      if (number > 0) {
        sumOfNumber += +number;
      } else {
        negativeNumberExist = `${negativeNumberExist}, ${number}`;
      }
    }
  });

  if (negativeNumberExist) {
    negativeNumberExist = negativeNumberExist.slice(2);
    throw new Error(`negative numbers not allowed ${negativeNumberExist}`);
  }

  return sumOfNumber;
}

module.exports = { add };
