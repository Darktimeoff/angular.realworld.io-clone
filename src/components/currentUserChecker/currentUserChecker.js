import {useEffect, useContext} from 'react';
import { useFetch, useLocalStorage } from './../../library/hooksLibrary';
import { CurrentUserContext } from './../../context/currentUser/currentUserContext';

const CurrentUserChecker = ({children}) => {
    const [{response}, doFetch] = useFetch('/user');
    const [,setCurrentUserState] = useContext(CurrentUserContext);
    const [token] = useLocalStorage('jwtToken');

    useEffect(() => {
        if(!token) {
            setCurrentUserState(prevState => ({
                ...prevState,
                isLoggedIn: false
            }));
            return;
        };
        doFetch();
        setCurrentUserState(prevState => ({
            ...prevState,
            isLoading: true
        }));
    }, [token, setCurrentUserState, doFetch]);

    useEffect(() => {
        if(!response) return;
        setCurrentUserState(prevState => ({
            ...prevState,
            isLoading: false,
            isLoggedIn: true,
            currentUser: response.user
        }));
    }, [response, setCurrentUserState])

    return children;
}

export default CurrentUserChecker;