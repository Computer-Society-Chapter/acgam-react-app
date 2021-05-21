import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./store/rootReducer";
<<<<<<< HEAD
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "./firebase";
import {
  setToLocalStorage,
  getFromLocalStorage,
} from "./store/persistenceFuncs";
=======
import {createFirestoreInstance} from "redux-firestore";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase  from "./firebase";
import {setToLocalStorage, getFromLocalStorage} from "./store/persistenceFuncs";
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> styled the dashboard

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const persistedState = getFromLocalStorage();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => setToLocalStorage(store.getState()));

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
