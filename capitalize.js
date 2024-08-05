function capitalize(str) {
  let arr = str.trim().split('');
  let firstCharCap = arr.shift().toUpperCase();
  arr.unshift(firstCharCap);
  return arr.join('');
}

module.exports = capitalize;
