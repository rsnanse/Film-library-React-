import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
export function useAuth() {
    const context = useContext(UserContext);
    return context;
}
