// First remove all the punctuations and change the string to array and count the number of words in the array
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const change = text.split(',')
const change1 = change.join('');
const change2 = change1.split('.');
const change3 = change2.join('');
const change4 = change3.split(' ');
const count = change4.length

console.log(change4);
console.log(count);

// In the following shopping cart add, remove, edit items
// ['Milk', 'Coffee', 'Tea', 'Honey']
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
const newCart = shoppingCart.slice()
const addMeat = newCart.unshift('Meat');
// add Sugar at the end of you shopping cart if it has not been already added
const newerCart = newCart.slice();
const addSugar = newerCart.push('Sugar');
// remove 'Honey' if you are allergic to honey
const newestCart = newerCart.slice();
const findHoney = newestCart.indexOf('Honey');
const removeHoney = newestCart.slice();
const removeHoney1 = removeHoney.splice(findHoney, 1);
// modify Tea to 'Green Tea'
const latestCart = newestCart.slice();
const findTea = latestCart.indexOf('Tea');
const showNewTea = latestCart.slice();
showNewTea[findTea] = 'Green Tea';

// The following is an array of 10 students ages:
//[19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
const sortedAges = ages.sort((a,b) => a - b);
console.log(`Sorted ages = ${sortedAges}`)
// Find the median age(one middle item or two middle items divided by two)
if (sortedAges.length % 2 === 0) {
    console.log('Median is ' + (sortedAges[sortedAges.length/2] + sortedAges[(sortedAges.length/2) - 1]) / 2)
}
else {
    console.log('Median is' + sortedAges[sortedAges.length/2])
}
// Find the average age(all items divided by number of items)
let sum = 0;
for (const age of ages) {
    sum += age;
}
let avg = sum/ages.length
console.log(`Average is ${avg}`);
// Find the range of the ages(max minus min)
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);
const ageRange = maxAge - minAge;
console.log(`The range is ${ageRange}`);

