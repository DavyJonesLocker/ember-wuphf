import { test, moduleFor } from 'ember-qunit';
import Ember from 'ember';

moduleFor('service:wuphf', 'WuphfService', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var service = this.subject();
  ok(service);
});

test('global timeout', function() {
  var service = this.subject();
  service.set('timeout', 500);
  service.danger('test');
  stop();
  Ember.run.later(this, function() {
    equal(service.get('content.length'), 0);
    start();
  }, 500);
});

test('danger timeout', function() {
  var service = this.subject();
  service.danger('test', 200);
  stop();
  Ember.run.later(this, function() {
    equal(service.get('content.length'), 0);
    start();
  }, 200);
});

test('info timeout', function() {
  var service = this.subject();
  service.info('test', 200);
  stop();
  Ember.run.later(this, function() {
    equal(service.get('content.length'), 0);
    start();
  }, 200);
});

test('success timeout', function() {
  var service = this.subject();
  service.success('test', 200);
  stop();
  Ember.run.later(this, function() {
    equal(service.get('content.length'), 0);
    start();
  }, 200);
});

test('warning timeout', function() {
  var service = this.subject();
  service.warning('test', 200);
  stop();
  Ember.run.later(this, function() {
    equal(service.get('content.length'), 0);
    start();
  }, 200);
});
