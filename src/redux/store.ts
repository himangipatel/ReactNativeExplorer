import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer, Persistor} from 'redux-persist';
import rootReducer from './reducer';
import {moviesApi} from './slices/movieSlice';
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth','language'],
  blacklist: ['moviesApi'],
  
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck:false}).concat(moviesApi.middleware),
});

export const persistor: Persistor  = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
