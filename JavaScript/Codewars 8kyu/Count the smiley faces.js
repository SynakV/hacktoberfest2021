// Return the total number of smiling faces in the array

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

const smiles = [
  [':', ';'], // eyes
  ['-', '~'], // nose (optional)
  [')', 'D'] // mouth
];

function countSmileys(arr) {
  const result = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].length === 2 && (
      smiles[0].includes(arr[i][0]) &&
      smiles[2].includes(arr[i][1]))
    ) {
      result.push(arr[i]);
    }
    if (
      arr[i].length === 3 && (
      smiles[0].includes(arr[i][0]) &&
      smiles[1].includes(arr[i][1]) &&
      smiles[2].includes(arr[i][2]))
    ) {
      result.push(arr[i]);
    }
  }
  return result.length;
}
