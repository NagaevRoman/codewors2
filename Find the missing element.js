function findMissing(set, subs) {


  set = set.sort();
  subs = subs.sort();
    for(let i = 0; i < set.length; i++){
      if(set[i] != subs[i]) return set[i];
    }


  }



  // if (set.length == 1) {
  //   return set[0]
  // } 


  // set = set.sort((a, b)=> a-b)
  // subset = subset.sort((a, b)=> a-b)
  // console.log(set);
  // console.log(subset);
//  let arr1 = new Set(set)
//  let arr2 = new Set(subset)
//  let el = 0
//  console.log(arr1);
//  console.log(arr2);

//  arr1.forEach(elem => { !arr2.has(elem) ? console.log(elem) : 0 });
// }

console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));