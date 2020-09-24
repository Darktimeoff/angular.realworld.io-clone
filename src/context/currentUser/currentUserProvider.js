import React, {useState} from 'react';
import { CurrentUserContext } from './currentUserContext';

export const CurrentUserProvider = ({children}) => {
    const [state, setState] = useState({
        isLoading: false,
        isLoggedIn: null,
        currentUser: null
    });
    
    return (
        <CurrentUserContext.Provider value={[state, setState]}>
            {children}
        </CurrentUserContext.Provider>
    )
}
