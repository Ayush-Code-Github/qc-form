import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import inspectionReducer from "../Slice/inspectionSlice";

const rootReducer = combineReducers({
  inspection: inspectionReducer,
});

const persistConfig = {
  key: "qc-form",
  storage: storage,
  whiteList: ["inspection"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
