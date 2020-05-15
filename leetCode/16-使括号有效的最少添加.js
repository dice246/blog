/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  if (S.length) {
    return deleRepeat(S);
  } else {
    return 0;
  }

  function deleRepeat(S) {
    while (S.length) {
      let temp = S;

      S = S.replace('()', '');

      if (S === temp) {
        return S.length;
      }
    }

    return 0;
  }
};


console.log(minAddToMakeValid("()))(("))