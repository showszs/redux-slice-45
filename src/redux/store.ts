import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counterSilce";
import { userReducer } from "./slices/userSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./counterSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
