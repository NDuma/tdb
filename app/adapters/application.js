import DS from 'ember-data'
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'
import ENV from 'techdb-admin/config/environment'

let hostConfig = {}
if (ENV.apiHost) { hostConfig.host = ENV.apiHost }

export default DS.RESTAdapter.extend(DataAdapterMixin, hostConfig, {
  authorizer: 'authorizer:application',
  namespace: 'api/v2',

  ajax (url, method, hash = {}) {
    hash.crossDomain = true
    return this._super(url, method, hash)
  }
});
