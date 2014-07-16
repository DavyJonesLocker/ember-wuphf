import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wuphf-message'],
  classNameBindings: ['type'],
  type: Ember.computed.alias('message.type'),
  click: function() {
    this.wuphf.removeObject(this.get('message'));
  }
});
