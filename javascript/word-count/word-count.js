module.exports = function (sentance) {
  var isValid = function (word) {
    return word.length > 0;
  }

  var assignZero = function (result, word) {
    result[word] = 0;
  }

  var addOne = function (result, word) {
    result[word] += 1;
  }

  var iteration = function (result, words, func) {
    words.forEach(function (word) {
      if (isValid(word)) {
        func(result, word);
      }
    });
    return result;
  };

  var initialize = function (result, words) {
    return iteration(result, words, assignZero);
  };

  var aggregate = function (result, words) {
    return iteration(result, words, addOne);
  };

  var words = sentance.split(/\s/);
  return aggregate(initialize({}, words), words);
};
