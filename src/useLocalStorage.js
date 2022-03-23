import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
    try {
        // getting stored value
        const saved = localStorage.getItem(key);
        const initial = JSON.parse(saved);
        return initial || defaultValue
    } catch(e) {
        return defaultValue
    }
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue)
    });

    useEffect(() => {
        // strong input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}