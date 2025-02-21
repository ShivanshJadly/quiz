import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: localStorage.getItem('username') || null,
    isAuthenticated: !!localStorage.getItem('username'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { username } = action.payload;
            state.username = username;
            state.isAuthenticated = true;
            localStorage.setItem('username', username);
        },
        logout: (state) => {
            state.username = null;
            state.isAuthenticated = false;
            localStorage.removeItem('username');
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.username;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
