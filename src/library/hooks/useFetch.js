import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import { useLocalStorage } from './useLocalStorage';

export function useFetch(url) {
    const baseUrl = `https://conduit.productionready.io/api`;
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState({});
    const [token] = useLocalStorage('jwtToken');

    const doFetch = useCallback((options = {}) =>  {
        setOptions(options);
        setIsLoading(true);
    }, [])

    useEffect(() => {
        const requestOptions = {
            ...options,
            ...{
                headers: {
                    authorization: token ? `Token ${token}` : ''
                }
            }
        }
        if(!isLoading) return;
        axios(baseUrl + url, requestOptions)
            .then(res => {
                setResponse(res.data);
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            }) 
    }, [isLoading, baseUrl, url, options, token]); 

    return [{response, error, isLoading, setResponse}, doFetch]
}
