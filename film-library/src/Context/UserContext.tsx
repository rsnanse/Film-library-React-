import { ChangeEvent, createContext, SyntheticEvent } from 'react';
import { useState, useEffect } from 'react';
import { User, IUserContext, UserContextProps } from './UserContext.props';

export const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserContextProvider = ({ children }: UserContextProps) => {
    const [userName, setUserName] = useState<string>('');

    const [activeUser, setActiveUser] = useState<string | string[]>(() => {
        const res = localStorage.getItem('activeUser');
        try {
            return res ? JSON.parse(res) : [];
        } catch {
            return res || [];
        }
    });

    const [profiles, setProfiles] = useState<User[]>(() => {
        const res = localStorage.getItem('profiles');
        return res ? JSON.parse(res) : [];
    });

    useEffect(() => {
        localStorage.setItem('profiles', JSON.stringify(profiles));
        if (activeUser && (typeof activeUser === 'string' || activeUser.length > 0)) {
            localStorage.setItem('activeUser', JSON.stringify(activeUser));
        } else {
            localStorage.removeItem('activeUser');
        }
    }, [profiles, activeUser]);

    const onChangeProfile = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleProfile = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (userName && typeof userName === 'string' && userName.trim()) {
            console.log('Вход на сайт с профилем:', userName);
            const isExist = profiles.some((profile) => {
                return profile.name.toLowerCase() === userName.trim().toLowerCase();
            });
            if (isExist) {
                setProfiles((prev) => [
                    ...prev.map((el) => {
                        if (el.name.toLowerCase() === userName.trim().toLowerCase()) {
                            return { ...el, isLogined: true };
                        }
                        return {
                            ...el,
                            isLogined: false
                        };
                    })
                ]);
                alert(`С возращением, ${userName}`);
                setActiveUser(userName.trim());
                setUserName('');

                return;
            }
            setProfiles((prev) => [
                ...prev.map((el) => {
                    return {
                        ...el,
                        isLogined: false
                    };
                }),
                { id: Date.now(), name: userName.trim(), isLogined: true }
            ]);
            setActiveUser(userName.trim());
            setUserName('');
        }
    };
    const handleLogOut = () => {
        setActiveUser([]);
        setProfiles((prev) => [
            ...prev.map((el) => {
                return {
                    ...el,
                    isLogined: false
                };
            })
        ]);
    };
    return <UserContext.Provider value={{ userName, activeUser, onChangeProfile, handleProfile, handleLogOut }}>{children}</UserContext.Provider>;
};
