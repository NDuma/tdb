import Ember from 'ember'
import technologyForm from 'techdb-admin/mixins/route-technology-form'

export default Ember.Route.extend(technologyForm, {
  model () { return this.store.createRecord('tech') }
})
