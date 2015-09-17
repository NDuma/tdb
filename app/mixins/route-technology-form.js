import Ember from 'ember';

const { get, set } = Ember
const technologyForm = 'technologies.form'

export default Ember.Mixin.create({
  templateName: technologyForm,
  controllerName: technologyForm,

  setupController (controller, model) {
    this._super(controller, model)

    this.store.findAll('vector')
      .then(function (vectors) {
        let sortedVectors = vectors.sortBy('position')
        set(controller, 'vectors', sortedVectors)
      })

    set(controller, 'startups', this.store.peekAll('startup'))
    this.store.findAll('startup')
  },

  deactivate () {
    let model = get(this, 'currentModel')
    if (!model) { return }
    if (get(model, 'isNew')) { return model.destroyRecord() }
    if (get(model, 'isDirty')) { return model.rollback() }
  },

  actions: {
    save (model) {
      model.save().then(() => this.transitionTo('technologies'))
    },
    setQuestion (question, value) {
      let model = get(this, 'currentModel')
      let position = get(question, 'position')
      let prop = `question${position}`
      set(model, prop, value)
    }
  }
});
