import DS from 'ember-data'

export default DS.Model.extend({
  levels: DS.attr(),
  position: DS.attr('number'),
  question: DS.attr('string')
})
