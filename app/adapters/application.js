import DS from 'ember-data'
import ENV from 'techdb-admin/config/environment'

let hostConfig = {}
if (ENV.apiHost) { hostConfig.host = ENV.apiHost }

export default DS.RESTAdapter.extend(hostConfig, {
  namespace: 'api/v2',

  ajax (url, method, hash = {}) {
    hash.crossDomain = true
    return this._super(url, method, hash)
  },
});
