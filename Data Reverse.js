function dataReverse(data) {
  
  let arr =[]
  let byte = data.length / 8
  for (let i = 0; i < byte; i++) {
     arr.push(data.splice(0, 8))
  }
  return arr.reverse().join().split(',').map(val => val * 1);

}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));

// let arrAdd =[]

// for (let i = 0; i < data.length; i++) {
//   arrAdd.push(data.splice(-8).join("").split(""))
// }

// return arrAdd.flat()

