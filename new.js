function isPrime(num) {
  let arr = [];
  let check = true;

  for (let j = 2; j < num; j++) {
    if (num % j == 0) {
      check = false;
    }
    if (j % 2 != 0) {
      arr.push(j);
    }
  }

  return {
    num: check,
    previousPrime: arr,
  };
}

console.log(isPrime(12));
