

  function killer(suspectInfo, dead) {
    let killer;
  
    Object.values(suspectInfo).forEach((array, i) => {
      if (dead.every(( val => array.includes(val) ))) {
        killer = i;
      }
    });
  
    return Object.keys(suspectInfo)[killer];
  }


  //  return Object.values(suspectInfo)
  //   .map((val, i) => {
  //   let count = 0;
    
  //   dead.map((curr) => {
  //   if (val.indexOf(curr) != -1) {
  //     count++
  //   } 
  //   })
  //   if (count == dead.length ) {
  //     return Object.keys(suspectInfo)[i]
  //   }
  
  // }) 


console.log(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']));