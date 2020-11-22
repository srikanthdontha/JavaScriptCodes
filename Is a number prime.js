function isPrime(num) {
    if (num < 2) {
       return false;
    }
  if (num === 2) {
       return true;
    }
    
    const div = Math.sqrt(num) + 1;
  for (let i = 2; i < div; i++) {
       if (num % i === 0) {
         return false;
       }
    }
  return true;
  }
isPrime(0)
