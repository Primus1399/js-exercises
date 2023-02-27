// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles) //HTMLCollections
// console.log(document.getElementsByTagName('h1').length) // 4

// for (let title of allTitles) {
//   console.log(title) // prints each elements in the HTMLCollection
// }
// const allTitles = document.getElementsByClassName('title')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }

// let firstTitle = document.getElementById('first-title')
// console.log(firstTitle) // <h1>First Title</h1>
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'