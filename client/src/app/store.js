import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { pickerApi } from '../services/pickerApi';
import  { userApi }  from '../services/userApi';
import userReducer from '../services/userSlice';


export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [ pickerApi.reducerPath]: pickerApi.reducer,
        userState: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([pickerApi.middleware, userApi.middleware]),
});

setupListeners(store.dispatch);