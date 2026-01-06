import {RootState} from "@/store/store";

export const selectUserDto = (state: RootState) => state.user.userDto;
export const selectIsAuthenticated = (state: RootState) =>
    state.user.isAuthenticated;
export const selectIsLoading = (state: RootState) => state.user.isLoading;