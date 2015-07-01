import Ember from 'ember'

export default Ember.Component.extend({
  tagName: 'label',
  classNames: [ 'columns', 'small-12', 'medium-6' ],

  actions: {
    selects (item) {
      this.sendAction('action', this.get('vector'), item.get('value'))
    }
  }
})
