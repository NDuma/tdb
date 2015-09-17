import AuthenticatorBase from 'ember-simple-auth/authenticators/base'
import Ember from 'ember'

const { RSVP, get, getProperties, isEmpty } = Ember

function extractSessionData (res) {
  return {
    userId: get(res, 'user._id'),
    userEmail: get(res, 'user.email'),
    token: get(res, 'user.tokens.firstObject')
  }
}

export default AuthenticatorBase.extend({
  restore (rawData) {
    let data = getProperties(rawData, ['userId', 'userEmail', 'token'])
    if (isEmpty(data.userId) || isEmpty(data.userEmail) || isEmpty(data.token)) {
      return RSVP.reject()
    }
    return RSVP.resolve(data)
  },
  authenticate (options) {
    let authenticate
    if (options.user) {
      authenticate = RSVP.resolve(options)
    } else {
      let adapter = this.container.lookup('adapter:application')
      let data = {
        user: {
          email: options.identification,
          password: options.password
        }
      }

      authenticate = adapter.ajax(adapter.buildURL('user'), 'POST', { data })
    }

    return authenticate.then(extractSessionData)
  },
  invalidate () {
    return RSVP.resolve()
  }
})
