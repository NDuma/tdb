import Ember from 'ember';

const { get, set } = Ember
const startupForm = 'startups.form'

export default Ember.Mixin.create({
  templateName: startupForm,
  controllerName: startupForm,

  setupController (controller, model) {
    this._super(controller, model)

    set(controller, 'technologies', this.store.all('tech'))
    this.store.findAll('tech')
  },

  deactivate () {
    let model = get(this, 'currentModel')
    if (!model) { return }
    if (get(model, 'isNew')) { return model.destroyRecord() }
    if (get(model, 'isDirty')) { return model.rollback() }
  },

  actions: {
    save (model) {
      model.save().then(() => this.transitionTo('startups'))
    }
  }
});
