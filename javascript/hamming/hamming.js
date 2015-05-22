var Hamming = function () {};

Hamming.prototype.same = function (a, b, index) {
  return a.split('')[index] === b.split('')[index];
};

Hamming.prototype.guard = function (a, b) {
  if (a.length  != b.length) {
    throw 'DNA strands must be of equal length.';
  }
};

Hamming.prototype.compute = function (a, b) {
  this.guard(a, b);

  var different = 0;
  for(var i = 0; i < a.length; i++) {
    if (!this.same(a, b, i)) {
      different += 1;
    }
  }
  return different;
};

module.exports = {
  compute: function (a, b) {
    return new Hamming().compute(a, b);
  }
}
