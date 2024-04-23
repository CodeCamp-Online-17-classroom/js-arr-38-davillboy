// write code here
const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
const result = array.filter(item => item.length > 6);
console.log(result); // ['pineapple', 'watermeon']

const array = [1, -3, 2, 8, -4, 5];
const result = array.filter(item => item > 0);
console.log(result); // [1, 2, 8, 5]

const array = [1, 3, 4, 5, 6, 7, 8];
const result = array.filter(item => item % 3 === 0);
console.log(result); // [3, 6]
