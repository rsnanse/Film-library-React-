import { ChangeEvent, ReactNode, SyntheticEvent } from 'react';

export interface UserContextProps {
    children: ReactNode;
}

export interface User {
    id: number;
    name: string;
    isLogined: boolean;
}

export interface IUserContext {
    userName: string;
    activeUser: string | string[];
    onChangeProfile: (e: ChangeEvent<HTMLInputElement>) => void;
    handleProfile: (event: SyntheticEvent<HTMLFormElement>) => void;
    handleLogOut: () => void;
}
