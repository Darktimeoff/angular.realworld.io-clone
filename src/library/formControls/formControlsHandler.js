export const emailHandler = (setEmail) => {
    return (event) => {
        setEmail(event.target.value);
    }
}

export const passwordHandler = (setPassword) => {
    return (event) => {
        setPassword(event.target.value);
    }
}

export const usernameHandler = (setUsername) => {
    return (event) => {
        setUsername(event.target.value);
    }
}