const ftoc = function(number) {
    let newTemp = ((number - 32) * (5/9));
  return Math.round(newTemp * 10) / 10;
}

const ctof = function(number) {
  let newTemp = (number / (5/9) + 32);
  return Math.round(newTemp * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
