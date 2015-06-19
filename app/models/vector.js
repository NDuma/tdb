import DS from 'ember-data'

export default DS.Model.extend({
  levels: DS.attr('levels'),
  position: DS.attr('number'),
  question: DS.attr('string')
})
