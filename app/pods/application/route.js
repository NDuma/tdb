import Ember from 'ember'
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin'

export default Ember.Route.extend(ApplicationRouteMixin, {
  updateAppTitle () {
    let path = this.get('controller.currentPath')
    let model = this.modelFor(path)
    let title
    if (model) {
      let modelName = model.get('type.modelName')
      let where = Ember.isArray(model) ? `All ${modelName}`: model.get('name')
      title = `TDB - ${where}`
    } else {
      title = `TDB`
    }
    document.getElementsByTagName('title')[0].text = title
  },
  actions: {
    didTransition () {
      Ember.run.next(this, this.updateAppTitle)
    }
  }
})
