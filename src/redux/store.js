import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./rtkQuery";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authSlice } from "./auth/authSclice";

import { filterReducer } from "./filter/filtterSlice";

//persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

// const rootReducer = combineReducers({
//   [contactsApi.reducerPath]: contactsApi.reducer,
//   filter: filterReducer,
//   auth: authSlice.reducer,
// });

// slice
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
    auth: persistReducer(persistConfig, authSlice.reducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
