import { useAuth } from '../../hooks/Auth.hook';
import styles from './Form.module.css';
import { FormProps } from './Form.props';
function Form({ placeholder, icon, text, direction, onChange, onSubmit, value }: FormProps) {
    const { handleProfile, userName, onChangeProfile } = useAuth();
    const currentValue = value !== undefined ? value : userName;
    const currentChange = onChange || onChangeProfile;
    const currentSubmit = onSubmit || handleProfile;

    return (
        <form className={styles[direction ? 'search-wrapper' : 'login-wrapper']} onSubmit={currentSubmit}>
            <div className={styles.wrapper}>
                {icon ? (
                    <>
                        <input className={styles.input} type="text" placeholder={placeholder} value={currentValue} onChange={currentChange} />
                        <img src={icon} alt="Лупа" className={styles.icon} />
                    </>
                ) : (
                    <input className={`${styles.input} ${styles.hidden}`} type="text" placeholder={placeholder} value={currentValue} onChange={currentChange} />
                )}
            </div>
            <button type="submit" className={styles['btn-search']}>
                {text}
            </button>
        </form>
    );
}

export default Form;
