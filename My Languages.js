function myLanguages(results) {
  let arrSort = []
  for (let key in results) {
    if (results[key] > 59) {
      arrSort.push([key, results[key]])
    }
  }
  return arrSort.sort((a, b)=> b[1] - a[1]).reduce((prev, curr)=> prev.concat(curr[0]), [])
}
 
function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}


console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));