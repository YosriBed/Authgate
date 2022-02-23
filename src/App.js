import React from "react";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import mysaga from "./saga";
import { reducer } from "./slice";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware))
);
const persistor = persistStore(store);

sagaMiddleware.run(mysaga);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<p> Loading ... </p>} persistor={persistor}>
      <div className='App'>Hello world</div>;
    </PersistGate>
  </Provider>
);

export default App;
