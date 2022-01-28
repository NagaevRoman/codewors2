function add(num1, num2) {
  const arr1 = String(num1).split('')
  const arr2 = String(num2).split('')
  let first = arr1.length  >= arr2.length ? arr1 : arr2
  let second = arr1.length < arr2.length ? arr1 : arr2
  let buf = Array(first.length - second.length).fill(0).concat(second)
  return +first
  .map((el, i) => buf[i] ? +el + +buf[i] : +el)
  .join('')

}

console.log(add(122, 81));