import Ember from 'ember'

export default Ember.Route.extend({
  model () { return this.store.find('tech') },

  actions: {
    delete (model) { model.destroyRecord() }
  }
})
