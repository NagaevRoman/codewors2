const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }



function combine(objs) {
  
  let objsum ={}
  let objsArr = [...arguments]
  objsArr.map(
    (val, i) => {
      for (const key in val) {
           (!objsum[key]) ? 
          objsum[key] = val[key] : 
          objsum[key] += val[key]
        }
      }
  )
      return objsum
}

console.log(combine( objB, objD));