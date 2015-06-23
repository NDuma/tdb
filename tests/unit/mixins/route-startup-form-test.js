import Ember from 'ember';
import RouteStartupFormMixin from '../../../mixins/route-startup-form';
import { module, test } from 'qunit';

module('Unit | Mixin | route startup form');

// Replace this with your real tests.
test('it works', function(assert) {
  var RouteStartupFormObject = Ember.Object.extend(RouteStartupFormMixin);
  var subject = RouteStartupFormObject.create();
  assert.ok(subject);
});
