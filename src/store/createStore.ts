import { createStore, compose, applyMiddleware, Action } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AppState } from './interfaces';
import appReducer from './appReducer';

const rootReducer = (state: AppState | undefined, action: Action) => {
  return appReducer(state, action);
};

const persistedReducer = persistReducer(
  {
    key: `root`,
    storage,
  },
  rootReducer
);

function enhanceStore() {
  const middlewares = [thunk];
  const composeEnhancers =
    (window as any)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose;
  return composeEnhancers(applyMiddleware(...middlewares));
}

export const store = createStore(persistedReducer, enhanceStore());
export const persistor = persistStore(store);
