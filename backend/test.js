function showPrimeNumber(n) {
  const hasil = [];
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      hasil.push(i);
    }
  }
  return hasil;
}

function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let j = 2; j < n; j++) {
      if (n % j === 0) {
        return false;
      }
    }
    return true;
  }
}

// console.info(isPrime(10));
console.log(showPrimeNumber(100));
/**
2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97
*/
