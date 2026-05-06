"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import allUsers from "@/public/users_data.json";
import {createContext, useCallback, useContext} from "react";

const authContext= createContext([]);
const {Provider} = authContext;

export function AuthProvider({children}) {
    const [user, setUser, logout] = useLocalStorage("auth_user", null);

    return (
        <Provider value={[user, setUser, logout]}>
            {children}
        </Provider>
    );
}

export default function useAuth() {
    const [user, setUser, logout] = useContext(authContext);
    const login = useCallback((username, password) => {
        const userToLogin = username.trim().toLocaleLowerCase();
        const userData = allUsers.find((_user) => _user.username === userToLogin || _user.email === userToLogin);
        if (userData && userData.password === password) {
            setUser(userData);

            return true;
        }

        return false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [user, login, logout];
}
