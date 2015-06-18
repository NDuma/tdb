import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    return this.store.find('vector').then(function (vectors) {
      return vectors.sortBy('position')
    })
  }
})
