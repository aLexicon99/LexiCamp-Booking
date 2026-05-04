"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import allUsers from "@/public/users_data.json";
import {useCallback} from "react";

export default function useAuth() {
    const [user, setUser, logout] = useLocalStorage("auth_user", null);
    const login = useCallback((username) => {
        const userToLogin = username.trim().toLocaleLowerCase();
        const userData = allUsers.find((_user) => _user.name === userToLogin);
        if (userData) {
            setUser(userData);

            return true;
        }

        return false;
    }, []);

    return [user, login, logout]
}
