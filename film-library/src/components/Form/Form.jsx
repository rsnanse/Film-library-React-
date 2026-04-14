import { useAuth } from '../../hooks/Auth.hook';
import styles from './Form.module.css';
function Form({ placeholder, icon, text, direction }) {
    const { handleProfile, userName, onChangeProfile } = useAuth();
    return (
        <form className={styles[direction ? 'search-wrapper' : 'login-wrapper']} onSubmit={handleProfile}>
            <div className={styles.wrapper}>
                {icon ? (
                    <>
                        <input className={styles.input} type="text" placeholder={placeholder} value={userName} onChange={onChangeProfile} />
                        <img src={icon} alt="Лупа" className={styles.icon} />
                    </>
                ) : (
                    <input className={`${styles.input} ${styles.hidden}`} type="text" placeholder={placeholder} value={userName} onChange={onChangeProfile} />
                )}
            </div>
            <button type="submit" className={styles['btn-search']}>
                {text}
            </button>
        </form>
    );
}

export default Form;
