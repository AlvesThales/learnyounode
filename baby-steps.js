args = process.argv;

slicedArgs = args.slice(2);

sum = slicedArgs.reduce((total, number) => +total + +number )

console.log(sum)