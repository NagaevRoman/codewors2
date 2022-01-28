function sortMyString(S) {
  let arr = S.split("");
  let sort1 = []
  let sort2 = [] 
for (let i = 0; i < arr.length; i++) {
  if (i%2 == 0 || i == 0) {
    sort1.push(arr[i])
  } else {
    sort2.push(arr[i])
  }
  }
  return sort1.concat(" " + sort2.join("")).join("")
}

console.log(sortMyString("YCOLUE'VREER"));

const sortMyString = s => {
  let even = s.split('').filter((v, i) => i % 2 === 0).join('')
  let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
  return even + ' ' + odd
}