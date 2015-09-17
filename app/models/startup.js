import DS from 'ember-data'

const string = DS.attr('string')

export default DS.Model.extend({
  name: string,
  slug: string,
  summary: string,
  image: string,
  websiteUrl: string,
  twitterUrl: string,
  crunchbaseUrl: string,
  angelUrl: string,
  techs: DS.hasMany('tech', { async: true })
});
