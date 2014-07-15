import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    danger: function() {
      this.wuph.danger("Danger!");
    },
    info: function() {
      this.wuph.info("Info!");
    },
    success: function() {
      this.wuph.success("Success!");
    },
    warning: function() {
      this.wuph.warning("Warning!");
    }
  }
});
