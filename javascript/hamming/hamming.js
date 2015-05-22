var Hamming = function () {};

Hamming.prototype.guard = function (a, b) {
  if (a.length != b.length) {
    throw 'DNA strands must be of equal length.';
  }
};

Hamming.prototype.compute = function (strand_1, strand_2) {
  this.guard(strand_1, strand_2);
  var a = strand_1.split('');
  var b = strand_2.split('');

  var different = 0;
  for(var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
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
