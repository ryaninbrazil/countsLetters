function count(str) {
  let obj = {};
  str = str.split(" ").join("");
  for (let i in str) {
    let letter = str.charAt(i);
      if (obj[letter]) {
          obj[letter].push(i);
      } else {
          obj[letter] = [i];
      }
  }
  
  return obj;    
};


console.log(count("lighthouse in the house of houses"));
