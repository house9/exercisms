//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var silent = function (text) {
    return text.trim().length === 0;
  };

  var question = function (text) {
    return text.substring(text.length - 1) === "?";
  };

  var yelling = function (text) {
    var normalized = text.replace(/[^\u00C0-\u017Fa-zA-Z]/g, "");
    return normalized.toUpperCase() === normalized && normalized.length > 0;
  };

  if (silent(input)) {
    return "Fine. Be that way!";
  } else if (yelling(input)) {
    return "Whoa, chill out!";
  } else if (question(input)) {
    return "Sure.";
  } else {
    return "Whatever.";
  }
};

module.exports = Bob;
