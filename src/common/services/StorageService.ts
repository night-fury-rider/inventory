// This file is inteneded to contain data storage related services.
// Use wrapper for every method in such a way that if in future we need to change the storage vendor, changes should happpen in this file only.

import {MMKV} from 'react-native-mmkv';

import LoggerService from '$common/services/LoggerService';

const StorageService = (() => {
  let storage: any = null;
  const init = () => {
    if (storage === null) {
      storage = new MMKV();
    }
  };

  const get = (storeKey: string, storedValueType?: any) => {
    if (storage === null) {
      return '';
    }
    switch (storedValueType) {
      case 'number':
        return storage.getNumber(storeKey);
      case 'boolean':
        return storage.getBoolean(storeKey);
      case 'string':
        return storage.getString(storeKey);
      default:
        let result;
        try {
          result = JSON.parse(storage.getString(storeKey) || null);
        } catch (err) {
          LoggerService.error('' + err);
          return null;
        }
        return result;
    }
  };

  const set = (storeKey: string, valueToBeStored: any) => {
    if (storage === null) {
      init();
    }
    if (Array.isArray(valueToBeStored)) {
      storage.set(storeKey, JSON.stringify(valueToBeStored));
    } else {
      storage.set(storeKey, valueToBeStored);
    }
  };

  const deleteStorage = (storeKey: string) => {
    if (storage === null) {
      return;
    }
    storage.delete(storeKey);
  };

  const clearAll = () => {
    if (storage === null) {
      return;
    }
    storage.clearAll();
  };

  return {
    init,
    get,
    set,
    delete: deleteStorage,
    clearAll,
  };
})();

export default StorageService;
