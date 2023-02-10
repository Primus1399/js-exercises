// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

const x = typeof '10';
const y = typeof 10;
console.log(x === y);
const convert = parseInt('10');
console.log(convert === 10);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

const parsing = parseFloat('9.8');
const numberTen = 10;
console.log((parsing + 0.2) === 10);

// Check if 'on' is found in both python and jargon

const word1 = 'python';
const word2 = 'jargon';
const checking1 = word1.includes('on');
console.log(checking1);
const checking2 = word2.includes('on');
console.log(checking2);

// I hope this course is not full of jargon. Check if jargon is in the sentence.

const sentence = 'I hope this course is not full of jargon';
const checkingSentence = sentence.includes('jargon');

// Generate a random number between 0 and 100 inclusively.

const random1 = Math.floor(Math.random() * 101);

// Generate a random number between 50 and 100 inclusively.

const random2 = 50 + Math.floor(Math.random() * 51);

// Generate a random number between 0 and 255 inclusively.

const random3 = Math.floor(Math.random() * 256);

//Clean the following text 
//%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching

const sentence1 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleanSentence = sentence1.replaceAll('@','').replaceAll('$','').replaceAll('%','').replaceAll('&','').replaceAll('#','')
console.log(cleanSentence);
