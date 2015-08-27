import Ember from 'ember'

export function humanIndex(params) {
  return Number(params) + 1
}

export default Ember.Helper.helper(humanIndex)
