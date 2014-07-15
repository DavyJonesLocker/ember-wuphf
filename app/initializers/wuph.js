import Wuph from '../services/wuph';

export default {
  name: 'wuph',

  initialize: function(container, application) {
    application.register('wuph:main', Wuph);
    application.inject('controller', 'wuph', 'wuph:main');
    application.inject('component',  'wuph', 'wuph:main');
    application.inject('route',      'wuph', 'wuph:main');
  }
};
