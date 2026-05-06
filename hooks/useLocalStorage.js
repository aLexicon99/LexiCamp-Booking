import { useState, useEffect } from 'react';

function load(key) {
    if (typeof window !== 'undefined' && window.localStorage) {
        const item = window.localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
    }
}

export default function useLocalStorage(key, initialValue) {
  // const [storedValue, setStoredValue] = useState(initialValue);
  const [storedValue, setStoredValue] = useState(()=> load(key) || initialValue);

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
        setStoredValue(load(key));
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    }
  }, [key]);

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue, removeValue];
}
