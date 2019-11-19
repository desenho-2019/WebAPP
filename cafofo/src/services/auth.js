export const TOKEN_KEY = "http://localhost:8990/user/api/token/";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null && localStorage.getItem(TOKEN_KEY) !== undefined;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};

