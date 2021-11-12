module.exports = {
  id: 'pt_lu',
  handler: function pluralize_pt_lu(val) {
    const n = Number(val),
      i = Math.floor(Math.abs(val));
    if (isNaN(n))
      throw Error('n is not a number');
    if (i === Math.floor(i) && (i >= 0 && i <= 1))
      return 'one';
    return 'other';
  }
};
