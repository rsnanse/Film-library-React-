import { createContext } from 'react';

export const UserContext = createContext({
    id: undefined,
    name: undefined,
    isLogined: undefined
});

export const UserContextProvider = ({ children }) => {
    return <UserContext.Provider>{children}</UserContext.Provider>;
};
