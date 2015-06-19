import Ember from 'ember'

export default Ember.Component.extend({
  classNames: 'row',

  isVectorLoaded: false,
  descriptionsChanged: Ember.observer('vector.levels.@each.description', function () {
    if (this.get('isVectorLoaded')) {
      Ember.run.debounce(this, this.sendAction, 'levels-changed', this.get('vector'), 300)
    } else {
      this.set('isVectorLoaded', true)
    }
  })
})
