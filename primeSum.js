function sumPrimes(num) {
  var sum =0;
  for(var i=1; i<=num; i++) {
    if(isPrime(i) === true) {
    sum += i;
    }
  }
  function isPrime(val) { //I googled how to check if a number is prime or not 
    if(val <= 1)  return false;
    if(val % 2 == 0 && val > 2) return false;
    let s=Math.sqrt(val);
    for(var i=3; i<=s; i++) { 
      if(val % i === 0) return false;
    }
    return true;
  }
console.log(sum);
 return sum;
}

sumPrimes(10);
