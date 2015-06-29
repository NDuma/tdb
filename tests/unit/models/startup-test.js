import { moduleForModel, test } from 'ember-qunit';

moduleForModel('startup', 'Unit | Model | startup', {
  // Specify the other units that are required for this test.
  needs: ['model:tech']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
