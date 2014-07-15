import Ember from 'ember';

export default Ember.ArrayProxy.extend({
  content: Ember.computed(function() {
    return Ember.A();
  }),
  pushObject: function(object) {
    var _this = this;
    this._super(object);

    if (this.timeout) {
      setTimeout(function() {
        _this.removeObject(object);
      }, this.timeout);
    }
  },
  danger: function(message) {
    this.pushObject({
      type: 'danger',
      message: message
    });
  },
  warning: function(message) {
    this.pushObject({
      type: 'warning',
      message: message
    });
  },
  info: function(message) {
    this.pushObject({
      type: 'info',
      message: message
    });
  },
  success: function(message) {
    this.pushObject({
      type: 'success',
      message: message
    });
  }
});
