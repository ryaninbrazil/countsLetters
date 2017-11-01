function count(letters) {
  let word = {};
  letters = letters.split(" ").join("");
  // for (var i = 0; i < letters.length; i++) {
  for (let i in letters) {
    let charCount = letters.charAt(i);
      if (word[charCount]) {
          word[charCount]++;
      } else {
          word[charCount] = 1;
      }
  }
  
  return word;    
};


console.log(count("lighthouse in the house of houses"));