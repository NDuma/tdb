import Ember from 'ember';
import RouteTechnologyFormMixin from '../../../mixins/route-technology-form';
import { module, test } from 'qunit';

module('RouteTechnologyFormMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var RouteTechnologyFormObject = Ember.Object.extend(RouteTechnologyFormMixin);
  var subject = RouteTechnologyFormObject.create();
  assert.ok(subject);
});
