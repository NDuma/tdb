import { toFixed } from '../../../helpers/to-fixed'
import { module, test } from 'qunit'

module('Unit | Helper | to fixed')

// Replace this with your real tests.
test('Set number to fixed', function(assert) {
  var result = toFixed([1, 2.123123])
  assert.equal(result, '2.1')
})

test('Output empty string for non number', function(assert) {
  var result = toFixed([1, 'Cocada'])
  assert.equal(result, '')
})
