/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  let map = {};

  for (let item of s) {
    if (map[item]) {
      map[item]++
    } else {
      map[item] = 1;
    }
  }

  let entries = Object.entries(map);

  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] === 1) {
      return entries[i][0]
    }
  }

  return ' '
};

firstUniqChar("abaccdeff")
