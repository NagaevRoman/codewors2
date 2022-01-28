  function colourAssociation(arr){
  
    return arr.map(
      (obj) =>
      {
        return {
          [obj[0]]: obj[1]
        }
      }
    )

  }

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]));