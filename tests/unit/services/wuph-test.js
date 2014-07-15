import { test, moduleFor } from 'ember-qunit';
import Ember from 'ember';

moduleFor('service:wuph', 'WuphService', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var service = this.subject();
  ok(service);
});

test('when timeout set message is automatically removed', function() {
  var service = this.subject();
  service.set('timeout', 500);
  service.danger('oh no!');
  stop();
  Ember.run.later(this, function() {
    equal(service.get('content.length'), 0);
    start();
  }, 500);
});
