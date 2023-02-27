// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Ivan');
localStorage.setItem('age', '23');
localStorage.setItem('country', 'Pinas');
localStorage.setItem('city', 'Silang');
console.log(localStorage)
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: 'Primus',
    lastName: 'Bawar',
    age: 23,
    skills: ['HTML', 'CSS', 'some JS'],
    country: 'Pinas',
}
const studentJSON = JSON.stringify(student);
localStorage.setItem('enrolled', studentJSON);