import { MouseEvent } from 'react';
import { useAuth } from '../../hooks/Auth.hook';
import styles from './NavigationPanel.module.css';
import { NavigationPanelProps } from './NavigationPanel.props';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
function NavigationPanel({ ...props }: NavigationPanelProps) {
    const { activeUser, handleLogOut } = useAuth();

    const userLogout = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        handleLogOut();
    };
    return (
        <div className={styles.container} {...props}>
            <div className={styles.logo}>
                <img src="/logo.svg" alt="Логотип" />
            </div>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink to="/" className={({ isActive }) => cn(styles['link'], { [styles['active']]: isActive })}>
                            Поиск фильмов
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/favorites" className={({ isActive }) => cn(styles['link'], { [styles['active']]: isActive })}>
                            Мои фильмы
                        </NavLink>
                        <div className={styles.counter}>2</div>
                    </li>
                    {activeUser.length !== 0 ? (
                        <>
                            <li className={styles.item}>
                                <a href="#" className={styles.link}>
                                    {activeUser}
                                </a>
                                <img src="/userLogined.svg" alt="Иконка пользователя" />
                            </li>
                            <li className={styles.item}>
                                <a href="#" className={styles.link} onClick={userLogout}>
                                    Выйти
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={styles.item}>
                                <NavLink to="/login" className={({ isActive }) => cn(styles['link'], { [styles['active']]: isActive })}>
                                    Войти
                                </NavLink>
                                <img src="/login-icon.svg" alt="Иконка войти" />
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default NavigationPanel;
