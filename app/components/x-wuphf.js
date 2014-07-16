import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wuphf-message-container'],
  messages: Ember.computed.alias('wuphf')
});
