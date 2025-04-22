import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import  filtersReducer  from "./filters/slice";
import { authReducer } from "./auth/slice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "contactsApp",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
  reducer: { contacts: contactsReducer, filters: filtersReducer, auth: persistedAuthReducer },
  middlewear: (getDefaultMiddlewear) => {
    return getDefaultMiddlewear({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    });
  }
});

export const persistor = persistStore(store);
