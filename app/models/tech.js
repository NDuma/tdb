import DS from 'ember-data'
import Ember from 'ember'

const { A, computed, getProperties, setProperties } = Ember
const string = DS.attr('string')
const number = DS.attr('number')
const QUESTIONS = ['question0', 'question1', 'question2', 'question3',
  'question4', 'question5', 'question6', 'question7', 'question8', 'question9']

export default DS.Model.extend({
  name: string,
  summary: string,
  description: string,
  image: string,
  slug: string,
  impactBanking: number,
  impactEducation: number,
  impactEntertainment: number,
  impactFood: number,
  impactHousing: number,
  impactMedia: number,
  impactMobile: number,
  impactPolicy: number,
  impactRetail: number,
  impactRobotics: number,
  impactSustainability: number,
  impactTransportation: number,
  impactTravel: number,
  impactWellbeing: number,
  question0: number,
  question1: number,
  question2: number,
  question3: number,
  question4: number,
  question5: number,
  question6: number,
  question7: number,
  question8: number,
  question9: number,
  readiness: number,

  questions: computed.apply(null, QUESTIONS.concat({
    get () {
      let qs = getProperties(this, QUESTIONS)
      return new A(QUESTIONS.map(function (question) { return qs[question] }))
    },
    set (key, values) {
      setProperties(this, values.reduce(function (acc, val, idx) {
        let question = QUESTIONS[idx]
        acc[question] = val
        return acc
      }, {}))
      return values
    }
  }))
});
