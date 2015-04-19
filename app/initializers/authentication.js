import AuthenticatorBase from 'simple-auth/authenticators/base'
import AuthorizerBase from 'simple-auth/authorizers/base'
import Ember from 'ember'

const { RSVP, get, getProperties, isEmpty } = Ember

const CustomAuthorizer = AuthorizerBase.extend({
  authorize (jqXHR) {
    let token = this.get('session.token')
    if (this.get('session.isAuthenticated') && !isEmpty(token)) {
      jqXHR.setRequestHeader('Authorization', `Bearer ${token}`)
    }
  }
})

function extractSessionData (res) {
  return {
    userId: get(res, 'user._id'),
    userEmail: get(res, 'user.email'),
    token: get(res, 'user.tokens.firstObject')
  }
}

const CustomAuthenticator = AuthenticatorBase.extend({
  restore (rawData) {
    let data = getProperties(rawData, ['userId', 'userEmail', 'token'])
    if (isEmpty(data.userId) || isEmpty(data.userEmail) || isEmpty(data.token)) {
      return RSVP.reject()
    }
    return RSVP.resolve(data)
  },
  authenticate (options) {
    if (options.user) { return RSVP.resolve(extractSessionData(options)) }

    let adapter = this.container.lookup('adapter:application')
    let url = adapter.buildURL('user')
    let data = {
      user: {
        email: options.identification,
        password: options.password
      }
    }

    return adapter.ajax(url, 'POST', { data }).then(extractSessionData)
  },
  invalidate () {
    return RSVP.resolve()
  }
})

export function initialize (container) {
  container.register('authenticator:custom', CustomAuthenticator)
  container.register('authorizer:custom', CustomAuthorizer)
}

export default { name: 'authentication', before: 'simple-auth', initialize }
