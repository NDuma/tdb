import Ember from 'ember'

export default Ember.Route.extend({
  actions: {
    register (user) {
      let adapter = this.container.lookup('adapter:application')
      let url = adapter.buildURL('user')
      let data = { user: user.getProperties('email', 'password') }
      adapter
        .ajax(url, 'POST', { data })
        .then( res => window.res = res)
    }
  }
});
