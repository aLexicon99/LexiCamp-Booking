"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import allUsers from "@/public/users_data.json";
import {useCallback} from "react";

export default function useAuth() {
    const [user, setUser, logout] = useLocalStorage("auth_user", null);
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
