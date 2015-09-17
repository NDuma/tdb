import AuthorizerBase from 'ember-simple-auth/authorizers/base'
import Ember from 'ember'

const { get, isEmpty } = Ember

export default AuthorizerBase.extend({
  authorize (block) {
    let token = get(this, 'session.content.authenticated.token')
    if (get(this, 'session.isAuthenticated') && !isEmpty(token)) {
      block('Authorization', `Bearer ${token}`)
    }
  }
})
