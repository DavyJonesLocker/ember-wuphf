import Ember from 'ember';

export default Ember.ArrayProxy.extend({
  content: Ember.computed(function() {
    return Ember.A();
  }),
  pushObject: function(object) {
    var _this = this;
    this._super(object);

    if (object.timeout || this.timeout) {
      setTimeout(function() {
        _this.removeObject(object);
      }, object.timeout || this.timeout);
    }
  },
  danger: function(message, timeout) {
    this.pushObject({
      type: 'danger',
      message: message,
      timeout: timeout
    });
  },
  info: function(message, timeout) {
    this.pushObject({
      type: 'info',
      message: message,
      timeout: timeout
    });
  },
  success: function(message, timeout) {
    this.pushObject({
      type: 'success',
      message: message,
      timeout: timeout
    });
  },
  warning: function(message, timeout) {
    this.pushObject({
      type: 'warning',
      message: message,
      timeout: timeout
    });
  }
});
