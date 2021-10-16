// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function isPangram(string){
  
  const result = {};
  
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (string[i].toUpperCase() === alphabet[j]) {
        if (result[alphabet[j]]) {
          result[alphabet[j]]++
        } else {
          result[alphabet[j]] = 1
        }
      }
    }
  }
  
  return Object.keys(result).length === alphabet.length;
}
