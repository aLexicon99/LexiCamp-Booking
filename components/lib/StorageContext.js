"use client";

import { createContext, useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const StorageContext = createContext();

export function StorageProvider({ children }) {
  const [user, setUser, isClient] = useLocalStorage("user", null);
  const [theme, setTheme, themeIsClient] = useLocalStorage("theme", "light");
  const [preferences, setPreferences, prefIsClient] = useLocalStorage(
    "preferences",
    {},
  );

  const value = {
    user,
    setUser,
    theme,
    setTheme,
    preferences,
    setPreferences,
    isClient: isClient && themeIsClient && prefIsClient,
  };

  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  );
}

export function useStorage() {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error("useStorage must be used within StorageProvider");
  }
  return context;
}
