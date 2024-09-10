// DO NOT CHANGE ANYTHING BETWEEN THE LINEs BELOW.

const prompCreator = require('prompt-sync');

const prompt = prompCreator();

const noun = prompt('Enter a string: ');
const count = prompt('Enter a number: ');

console.log('noun is ' + noun);
console.log('count is ' + count);

// TODO: Set the result to a string of the number and a noun in pluralized form, like
// "5 cats" or "1 dog", given a noun and count from above.
const result = undefined;

// DO NOT CHANGE ANYTHING BELOW THIS LINE.
console.log('result= ' + result);

module.exports = {
  result,
};
