import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    danger: function() {
      this.wuphf.danger("Danger!");
    },
    info: function() {
      this.wuphf.info("Info!");
    },
    success: function() {
      this.wuphf.success("Success!");
    },
    warning: function() {
      this.wuphf.warning("Warning!");
    }
  }
});
