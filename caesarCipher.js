function caesarCipher(str, key) {
  key = key % 26;

  let arr = str.split('').map((char) => {
    let charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      return String.fromCharCode(((charCode - 65 + key) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(((charCode - 97 + key) % 26) + 97);
    } else {
      return char;
    }
  });
  return arr.join('');
}

module.exports = caesarCipher;
