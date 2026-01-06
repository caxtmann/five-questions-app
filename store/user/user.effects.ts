import {SecureStoreKeys} from "@/constants/SecureStoreKeys";
import {createUserInDB, deleteUserInDB, getUserFromDB, updateUserInDB} from "@/lib/api/user.api";
import {UserCreationParams} from "@/models/types/userCreationParams";
import {UserUpdateParams} from "@/models/types/userUpdateParams";
import {createAsyncThunk} from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

export const initializeAuthentication = createAsyncThunk(
    'user/initializeAuthentication',
    async () => {
        const userId = await SecureStore.getItemAsync(SecureStoreKeys.USER_ID);
        if (!userId) {
            return null;
        }
        const userInDB = await getUserFromDB(userId);
        if (!userInDB) {
            await SecureStore.deleteItemAsync(SecureStoreKeys.USER_ID);
            return null;
        }
        return userInDB;
    }
)

export const authenticateUser = createAsyncThunk(
    'user/authenticateUser',
    async (params: UserCreationParams) => {
        const userWithId = await createUserInDB(params);
        await SecureStore.setItemAsync(SecureStoreKeys.USER_ID, userWithId.id);
        return userWithId;
    }
)

export const unauthenticateUser = createAsyncThunk(
    'user/unauthenticateUser',
    async () => {
        const id = await SecureStore.getItemAsync(SecureStoreKeys.USER_ID);
        if (!id) return null;
        await deleteUserInDB(id);
        await SecureStore.deleteItemAsync(SecureStoreKeys.USER_ID);
        return null;
    }
)


export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (params: UserUpdateParams) => {
        return await updateUserInDB(params);
    }
);
