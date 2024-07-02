// src/store.ts

import { createStore, applyMiddleware, Store, compose } from 'redux';
import { thunk, ThunkMiddleware } from 'redux-thunk';
import { rootReducer, RootState } from './reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<RootState> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, any>))
);

export default store;