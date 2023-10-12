import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default (() => {
  const dev = {
    api: {
      host: 'http://0.0.0.0:8080',
    },
  };

  const prod = {
    api: {
      host: 'http://0.0.0.0:8080',
    },
  };

  const common = {
    store: {
      version: '1',
      config: {
        storage: AsyncStorage,
        blacklist: [],
      },
    },
  };

  return _.extend(common, __DEV__ ? dev : prod);
})();
