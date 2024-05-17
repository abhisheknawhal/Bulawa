import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userDataReducer from '../redux/reducers/UserDataSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: [userDataReducer], // Add the reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, userDataReducer);

const store = configureStore({
  reducer: {
    userData: persistedReducer,
  },
});

const persistor = persistStore(store);

export {store, persistor};