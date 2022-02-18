const number = [1,2,3,4,5,6,11,22,32,34,17]
const a = number.sort((a,b) => {return a-b})
console.log(a);
console.log('largest',a[a.length]);
console.log('second largest',a[a.length-2]);