// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

const vowels = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    if (Object.keys(vowels).includes(string[i])) {
      result.push(vowels[string[i]]);
    } else {
      result.push(string[i]);
    }
  }
  return result.join('');
}

function decode(string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    if (Object.values(vowels).includes(+string[i])) {
      result.push(Object.keys(vowels)[string[i] - 1]);
    } else {
      result.push(string[i]);
    }
  }
  return result.join('');
}
