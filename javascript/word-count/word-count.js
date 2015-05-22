module.exports = function (sentance) {
  var isValid = function (word) {
    return word.length > 0;
  }

  var initialize = function (result, words) {
    words.forEach(function (word) {
      if (isValid(word)) {
        result[word] = 0;
      }
    });
    return result;
  };

  var aggregate = function (result, words) {
    words.forEach(function (word) {
      if (isValid(word)) {
        result[word] += 1;
      }
    });
    return result;
  };

  var words = sentance.split(/\s/);
  return aggregate(initialize({}, words), words);
};
