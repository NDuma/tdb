import Ember from 'ember'

export function toFixed(params) {
  let [digits, val] = params
  let number = Number(val)
  return isNaN(number) ? '' : number.toFixed(digits)
}

export default Ember.HTMLBars.makeBoundHelper(toFixed);
