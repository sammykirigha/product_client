import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector as rawUseSelector, } from 'react-redux';
import rootReducer from './redux';

 const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

export default store