//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

const base = prompt('Enter base:')
const height = prompt('Enter height:');

const area = 0.5 * base * height;
console.log(alert(`Area of triangle is ${area}`));

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

const hours = prompt('Enter hours:');
const rate = prompt('Enter hourly rate:');
const pay = hours * rate;
console.log(alert('Your weekly earning is ' + pay));

//If the length of your name is greater than 7 say, your name is long else say your name is short.

const yourName = prompt('Your name:');

if (yourName.length > 7) {
    console.log(alert('your name is greater than 7'))
}
else 
    console.log(alert('name is short'));