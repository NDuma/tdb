import Ember from 'ember';

const { get } = Ember
const technologyForm = 'technologies.form'

export default Ember.Mixin.create({
  templateName: technologyForm,
  controllerName: technologyForm,

  deactivate () {
    let model = get(this, 'currentModel')
    if (!model) { return }
    if (get(model, 'isNew')) { return model.destroyRecord() }
    if (get(model, 'isDirty')) { return model.rollback() }
  },

  actions: {
    save (model) {
      model.save().then(() => this.transitionTo('technologies'))
    }
  }
});
