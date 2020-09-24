import React from 'react';
import { CurrentUserProvider } from './currentUser/currentUserProvider';

export default ({children}) => (
    <CurrentUserProvider>
        {children}
    </CurrentUserProvider>
)