import {useState, useEffect} from 'react';

export function useLocalStorage(key, initialValue='') {
    const [value, setValue] = useState(() => {
        return localStorage.getItem(key) || initialValue;
    });

    useEffect(() => {
        console.log(key, value)
        localStorage.setItem(key, value);     
    }, [value, key])

    return [value, setValue]
}