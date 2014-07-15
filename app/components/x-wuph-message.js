import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wuph-message'],
  classNameBindings: ['type'],
  type: Ember.computed.alias('message.type'),
  click: function() {
    this.wuph.removeObject(this.get('message'));
  }
});
