import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wuph-message-container'],
  messages: Ember.computed.alias('wuph')
});
