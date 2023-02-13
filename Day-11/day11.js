const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor)

// Destructure the rectangle object by its properties or keys.
let {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);

// Iterate through the users array and get all the keys of the object using destructuring
let [user1, user2, user3, user4, user5, user6, user7] = users;
const firstUser = Object.keys(user1);
const secondUser = Object.keys(user2);
const thirdUser = Object.keys(user3);
const fourthUser = Object.keys(user4);
const fifthUser = Object.keys(user5);
const sixthUser = Object.keys(user6);
const seventhUser = Object.keys(user7);
console.log(firstUser);

// Find the persons who have less than two skills
for (const {name, skills} of users) {
    if (skills.length < 2) {
        console.log(`${name} has less than 2 skills`)
    }
    else {
        console.log(`${name} has 2 or more skills`)
    }
}