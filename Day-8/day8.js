const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// Find the person who has many skills in the users object.
for (let i = 0; i < Object.values(users).length; i++) {
    let person = Object.values(users)[i];
    let skillSet = person.skills;
    if (skillSet.length >= 5) {
      console.log('User ' + Object.keys(users)[i] + ' has many skills');
    }

}
// Count logged in users, count users having greater than equal to 50 points from the following object.

console.log(`There are ${Object.keys(users).length} users`);

for (let i = 0; i < Object.keys(users).length; i++) {
  let person = Object.values(users)[i];
  let personPoints = person.points;
  if (personPoints >= 50) {
    console.log('User: ' +Object.keys(users)[i] + ' has 50 or more points');
  }
}

//Find people who are MERN stack developer from the users object

for (let i = 0; i < Object.keys(users).length; i++) {
    let person = Object.values(users)[i];
    let personSkill = person.skills;
    if (personSkill.includes('MongoDB' && 'Express' && 'React' && 'Node')) {
      console.log('User: ' + Object.keys(users)[i] + ' is a MERN stack dev');
    }
}