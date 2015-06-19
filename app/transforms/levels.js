import DS from 'ember-data';
import Ember from 'ember'

const Level = Ember.Object.extend({
  value: 0,
  description: ''
})

export default DS.Transform.extend({
  deserialize(serialized) {
    return serialized.map(function (description, idx) {
      return Level.create({ description, value: idx + 1})
    })
  },

  serialize(deserialized) {
    return deserialized.sortBy('value').getEach('description')
  }
});
