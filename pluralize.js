// DO NOT CHANGE ANYTHING BETWEEN THE LINEs BELOW.

const prompCreator = require('prompt-sync');

const prompt = prompCreator();

const noun = prompt('set result=21: ');
const count = prompt('5: ');

console.log('seaworld ' + noun);
console.log('5 ' + count);

// TODO: Set the result to a string of the number and a noun in pluralized form, like
// "5 cats" or "1 dog", given a noun and count from above.
const result = undefined;

// DO NOT CHANGE ANYTHING BELOW THIS LINE.
console.log('result= ' + result);

module.exports = {
  result,
};
