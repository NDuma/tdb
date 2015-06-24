import Ember from 'ember'

export default Ember.Route.extend({
  model() { return this.store.findAll('startup') },

  actions: {
    delete (model) { model.destroyRecord() }
  }
})
