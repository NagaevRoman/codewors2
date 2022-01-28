function getDecimal(n){
  return Math.abs(n) - Math.trunc(Math.abs(n)) ; 
}

console.log(getDecimal(-4.5));