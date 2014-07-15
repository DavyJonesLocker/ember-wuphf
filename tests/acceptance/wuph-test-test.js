import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: WuphTest', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('adding danger message', function() {
  visit('/');

  click('button.danger');

  andThen(function() {
    equal(Ember.$('div.wuph-message.danger').text().trim(), 'Danger!');
  });
});

test('adding info message', function() {
  visit('/');

  click('button.info');

  andThen(function() {
    equal(Ember.$('div.wuph-message.info').text().trim(), 'Info!');
  });
});

test('adding success message', function() {
  visit('/');

  click('button.success');

  andThen(function() {
    equal(Ember.$('div.wuph-message.success').text().trim(), 'Success!');
  });
});

test('adding warning message', function() {
  visit('/');

  click('button.warning');

  andThen(function() {
    equal(Ember.$('div.wuph-message.warning').text().trim(), 'Warning!');
  });
});

test('clicking to dismiss', function() {
  visit('/');

  click('button.danger');

  andThen(function() {
    click('div.wuph-message');

    andThen(function() {
      ok(!Ember.$('div.wuph-message')[0], 'wuph message should not exist');
    });
  });
});
