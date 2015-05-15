import Ember from 'ember'
import Tech from 'techdb-admin/models/tech'
import _ from 'npm:lodash'
import hmean from 'npm:compute-hmean'

const { computed, getProperties } = Ember
const { QUESTIONS } = Tech
const ALL_QUESTIONS = QUESTIONS.join(',')
const MODEL_QUESTIONS = `model.{${ALL_QUESTIONS}}`

export default Ember.Controller.extend({
  currentReadiness: computed(MODEL_QUESTIONS, {
    get () {
      let model = this.get('model')
      let questions = _.values(getProperties(model, QUESTIONS))
      let mean = hmean(questions)
      return isNaN(mean) ? '' : mean.toFixed(1)
    }
  })
})
