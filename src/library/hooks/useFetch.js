import {useState, useEffect} from 'react';
import axios from 'axios';

export function useFetch(url) {
    const baseUrl = `https://conduit.productionready.io/api`;
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState({});

    function doFetch(options = {}) {
        setOptions(options);
        setIsLoading(true);
    }

    useEffect(() => {
        if(!isLoading) return;

        axios(baseUrl + url, options)
            .then(res => {
                setResponse(res.data);
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            })
    }, [isLoading]) 

    return [{response, error, isLoading}, doFetch]
}