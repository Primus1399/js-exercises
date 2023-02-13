// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
//   [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ]

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

const findPriceTotal = products.map( (prod) => prod.price).filter((price) => typeof price === 'number').reduce((arr, val) => arr + val);

// Find the sum of price of products using only reduce reduce(callback))
const arr = [];
for (const prod of products) {
    if (typeof prod.price === 'number') {
        arr.push(prod.price);
    }
}
console.log(arr)
const reduceOnly = arr.reduce((acc, val) => acc + val);