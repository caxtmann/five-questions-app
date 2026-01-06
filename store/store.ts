import userSlice from "@/store/user/user.slice";
import {configureStore} from "@reduxjs/toolkit";
import appSlice from "@/store/app/app.slice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        app: appSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;