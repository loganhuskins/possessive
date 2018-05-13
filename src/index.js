const possessive = (noun) => {
  if (typeof noun !== 'string') throw new TypeError('Value passed must be a string')
  if (noun.toLowerCase().endsWith('s')) return noun + '\''
  return noun + '\'s'
}

module.exports = possessive
