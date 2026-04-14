import { useState, useEffect } from 'react';
export function useAuth() {
    const [userName, setUserName] = useState('');

    const [activeUser, setActiveUser] = useState(() => {
        const res = localStorage.getItem('activeUser');
        try {
            return res ? JSON.parse(res) : [];
        } catch {
            return res || [];
        }
    });

    const [profiles, setProfiles] = useState(() => {
        const res = localStorage.getItem('profiles');
        return res ? JSON.parse(res) : [];
    });

    useEffect(() => {
        localStorage.setItem('profiles', JSON.stringify(profiles));
        if (activeUser) {
            localStorage.setItem('activeUser', JSON.stringify(activeUser));
        } else {
            localStorage.removeItem('activeUser');
        }
    }, [profiles, activeUser]);

    const onChangeProfile = (e) => {
        setUserName(e.target.value);
    };

    const handleProfile = (event) => {
        event?.preventDefault();
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
    return { userName, activeUser, onChangeProfile, handleProfile, handleLogOut };
}
