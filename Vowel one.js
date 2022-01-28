
const vowelOne = (s) =>
 s
 .replace(/./g, val =>/[aeiou]/i
 .test(val)?'1':'0')

console.log(vowelOne( "vowelOne" ));