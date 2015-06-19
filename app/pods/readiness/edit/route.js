import Ember from 'ember'

export default Ember.Route.extend({
  actions: {
    saveAll (vectors) { vectors.filterBy('isDirty').invoke('save') },
    refreshLevels (model) { model.transitionTo('loaded.updated.uncommitted') }
  }
})
