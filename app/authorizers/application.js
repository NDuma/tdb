import AuthorizerBase from 'ember-simple-auth/authorizers/base'
import Ember from 'ember'

const { get, isEmpty } = Ember

export default AuthorizerBase.extend({
  authorize (jqXHR) {
    let token = get(this, 'session.token')
    if (get(this, 'session.isAuthenticated') && !isEmpty(token)) {
      jqXHR.setRequestHeader('Authorization', `Bearer ${token}`)
    }
  }
})
