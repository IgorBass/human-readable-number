module.exports = function toReadable (number) {
    let converter = require('number-to-words');
    return converter.toWords(number).replace('-', ' ')
}
