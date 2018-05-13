const assert = require('assert')

const possessive = require('../src/index.js')

describe('The Possessive library should...', () => {
  it('take a common noun and make it possessive', () => {
    const expected = 'mom\'s'
    const actual = possessive('mom')
    assert.equal(actual, expected)
  })
  it('take a proper noun and make it possessive', () => {
    const expected = 'Logan\'s'
    const actual = possessive('Logan')
    assert.equal(actual, expected)
  })
  it('take a plural noun and make it possessive', () => {
    const expected = 'kids\''
    const actual = possessive('kids')
    assert.equal(actual, expected)
  })
  it('take a proper noun ending in s and make it possessive', () => {
    const expected = 'Huskins\''
    const actual = possessive('Huskins')
    assert.equal(actual, expected)
  })
  it('thrown an error when nothing of use is passed in', () => {
    let error
    let testable
    try {
      testable = possessive(1)
    } catch (err) {
      error = err
    }
    assert.ok(error)
    assert.ok(!testable)
  })
})
