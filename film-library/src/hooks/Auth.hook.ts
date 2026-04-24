import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
export function useAuth() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('Контекст пуст');
    }
    return context;
}
