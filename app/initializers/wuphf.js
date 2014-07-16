import Wuphf from '../services/wuphf';

export default {
  name: 'wuphf',

  initialize: function(container, application) {
    application.register('wuphf:main', Wuphf);
    application.inject('controller', 'wuphf', 'wuphf:main');
    application.inject('component',  'wuphf', 'wuphf:main');
    application.inject('route',      'wuphf', 'wuphf:main');
  }
};
