import { persistStore, persistReducer } from 'redux-persist';
import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import mainReducer from './bootstrapReducers';

let finalReducer = mainReducer;

const persistConfig = {
  active: true,
  config: {
    key: 'root',
    storage,
    whitelist: [
      'active',
      'menus',
      'orders',
    ],
  },
};

if (persistConfig.active) {
  finalReducer = persistReducer(persistConfig.config, mainReducer);
};

export const store = createStore(finalReducer);
export const persistor = persistStore(store);