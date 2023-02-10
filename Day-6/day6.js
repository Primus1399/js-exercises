// Iterate 0 to 10 using for loop, do the same using while and do while loop
let i = 0;
do {
    console.log(i);
    i++;
}
while (i <= 10);

let x = 0
while(x <= 10) {
    console.log(x);
    x++;
}
// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let y = 10; y >= 0; y--) {
    console.log(y);
}

let z = 10;
do {
    console.log(z);
    z--;
}
while (z >= 00);

let a = 10
while(a >= 0) {
    console.log(a);
    a--;
}

// Iterate 0 to n using for loop

let n = prompt('number:');
let nInt = parseInt(n);
let b = 0;

while (b <= nInt) {
    console.log(b);
    b++;
}
// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

// let hash = 2;
// let arr = [];

// while (arr.length < hash && hash <= 7) {
//     arr.push('#');
//     console.log(arr);
// }
// while (hash < 7) {
//     arr.toString().split(',').join('');
//     hash++
//     console.log(arr)
// }