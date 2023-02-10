// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (x, y, z) => {
    const arr = [x , y, z];
    const sorted = arr.sort((a,b) => a - b);
    return sorted.pop();
}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

const printArray = ([...arr]) => {
    for (ar of arr) {
        console.log(ar)
    }
}

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const userIdGenerator = () => {
    let output = '';
    for (let i = 0; i < 7; i++) {
        let randomNum = characters.charAt(Math.floor(Math.random() * characters.length));
        output += randomNum;
    }
    return output;
}