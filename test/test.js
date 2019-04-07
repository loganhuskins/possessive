const assert = require('assert')

const possessive = require('../src/index.js')

function positiveTest (input, expected) {
  assert.equal(possessive(input), expected)
}

function throwTest (input) {
  let error
  let testable
  try {
    testable = possessive(input)
  } catch (err) {
    error = err
  }
  assert.ok(error)
  assert.ok(!testable)
}

describe('The Possessive library should...', () => {
  it('take a common noun and make it possessive', () => positiveTest('mom', 'mom\'s'))
  it('take a proper noun and make it possessive', () => positiveTest('Logan', 'Logan\'s'))
  it('take a plural noun and make it possessive', () => positiveTest('kids', 'kids\''))
  it('take a proper noun ending in s and make it possessive', () => positiveTest('Huskins', 'Huskins\''))
  it('thrown an error when a number is passed in', () => throwTest(1))
  it('throws an error when null is passed in', () => throwTest(null))
  it('throws an error when undefined is passed in', () => throwTest(undefined))
})
