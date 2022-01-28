function nbDig(n, d) {
  let count = 0
  for (let i = 0; i <= n; i++) {
    let b = (i**2).toString()
    let regexp = new RegExp(`${d}`, "g")
    if (b.match(regexp)) {
      count = count + b.match(regexp).length
    }    
  }
  return count
}
console.log(nbDig(5750, 0));

nbDig = (n, d) => Array.from(Array(n + 1), (e, i) => i * i).join('').match(new RegExp(d, 'g')).length;

