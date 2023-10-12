import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createQuoteReducer from '../../features/createQuote/slice';

export const store = configureStore({
  reducer: {
    createQuote: createQuoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
