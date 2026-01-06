import {UserDto} from "@/models/dto/user.dto";
import {authenticateUser, initializeAuthentication, unauthenticateUser, updateUser} from "@/store/user/user.effects";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    userDto: UserDto | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    userDto: null,
    isLoading: true,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(initializeAuthentication.fulfilled, (state, action: PayloadAction<UserDto | null>) => {
                if (action.payload) {
                    state.userDto = action.payload;
                    state.isAuthenticated = true;
                }
                state.isLoading = false;
            })
            .addCase(authenticateUser.fulfilled, (state, action: PayloadAction<UserDto>) => {
                state.userDto = action.payload;
                state.isAuthenticated = true;
                state.isLoading = false;
            })
            .addCase(unauthenticateUser.fulfilled, (state) => {
                state.userDto = null;
                state.isAuthenticated = false;
                state.isLoading = false;
            })
            .addCase(updateUser.fulfilled, (state, action: PayloadAction<UserDto>) => {
                state.userDto = action.payload;
            })
    }
});

export default userSlice.reducer;