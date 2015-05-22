var helper = {
  same: function (a, b, index) {
    return a.split('')[index] === b.split('')[index];
  },
  guard: function (a, b) {
    if (a.length  != b.length) {
      throw 'DNA strands must be of equal length.';
    }
  }
};

module.exports = {
  compute: function (a, b) {
    helper.guard(a, b);

    var different = 0;
    for(var i = 0; i < a.length; i++) {
      if (!helper.same(a, b, i)) {
        different += 1;
      }
    }
    return different;
  }
};
