const maxTriSum = (n) =>
    Array.from(new Set(n))
    .sort((a, b) => a-b)
    .splice(-3, 3)
    .reduce((sum, curr)=> sum + curr)

console.log(maxTriSum([-13,-50,57,13,67,-13,57,108,67]));