import Ember from 'ember'

const { get, getProperties } = Ember
const { service } = Ember.inject

export default Ember.Controller.extend({
  session: service('session'),
  actions: {
    authenticate () {
      let data = getProperties(this, 'identification', 'password')
      get(this, 'session').authenticate('authenticator:bearer', data)
    }
  }
})
