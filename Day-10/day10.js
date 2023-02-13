// create an empty set
const emptSet = new Set();
console.log(emptSet);

// Create a set containing 0 to 10 using loop
const newSet = new Set();
for (let i = 0; i <= 10; i++) {
    newSet.add(i);
}
console.log(newSet);
// Remove an element from a set
const houseItems = ['TV', 'Radio', 'PC', 'Fan', 'Faucet'];
const newerSet = new Set(houseItems);
const removal = newerSet.delete('Radio');
console.log(newerSet);

// Clear a set
const peripherals = ['mouse', 'headphones', 'mic', 'mousepad'];
const peripSet = new Set(peripherals);
const clearingPerip = peripSet.clear();
console.log(peripSet);

// Create a set of 5 string elements from array
const randomItems = ['socks', 'spoon', 'fork', 'snacc', 'shaving cream'];
const randomItemsSet = new Set(randomItems);
console.log(randomItemsSet);

// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
// Find a union b
const c = [...a, ...b];
const cSet = new Set(c);
console.log(cSet);
// Find a intersection b
const intersectB = a.filter((num) => b.includes(num));
const intersectBSet = new Set(intersectB);
console.log(intersectBSet);
// Find a with b
const diffA = a.filter((num) => !b.includes(num));
const difference = new Set(diffA);
console.log(difference);
