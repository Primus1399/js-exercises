// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

const userScore = prompt('Score:');

if (userScore >= 80 && userScore <= 100) {
    alert('A');
}
else if (userScore >= 70 && userScore <= 89) {
    alert('B');
}
else if (userScore >= 60 && userScore <= 69) {
    alert('C');
}
else if (userScore >= 50 && userScore <= 59) {
    alert('D');
}
else {
    alert('F');
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const monthInput = prompt('Month:');
const monthInput1 = monthInput.toLowerCase();

if (monthInput1 === 'september' || monthInput1 === 'october' || monthInput1 === 'november') {
    alert('The season is Autumn');
}
else if (monthInput1 === 'december' || monthInput1 === 'january' || monthInput1 === 'february') {
    alert('The season is Winter.');
}
else if (monthInput1 === 'march' || monthInput1 === 'april' || monthInput1 === 'may') {
    alert('The season is Spring');
}
else if (monthInput1 === 'june' || monthInput1 === 'july' || monthInput1 === 'august') {
    alert('The season is Summer');
}
else {
    alert('Invalid input');
}