var Hamming = {};

Hamming.same = function (a, b, index) {
  return a.split('')[index] === b.split('')[index];
};

Hamming.guard = function (a, b) {
  if (a.length  != b.length) {
    throw 'DNA strands must be of equal length.';
  }
};

Hamming.compute = function (a, b) {
  Hamming.guard(a, b);

  var different = 0;
  for(var i = 0; i < a.length; i++) {
    if (!Hamming.same(a, b, i)) {
      different += 1;
    }
  }
  return different;
};

module.exports = Hamming;
