import styles from './Form.module.css';
function Form({ placeholder, value, onChange, icon, text, onSubmit, direction }) {
    return (
        <form className={styles[direction ? 'search-wrapper' : 'login-wrapper']} onSubmit={onSubmit}>
            <div className={styles.wrapper}>
                {icon ? (
                    <>
                        <input className={styles.input} type="text" placeholder={placeholder} value={value} onChange={onChange} />
                        <img src={icon} alt="Лупа" className={styles.icon} />
                    </>
                ) : (
                    <input className={`${styles.input} ${styles.hidden}`} type="text" placeholder={placeholder} value={value} onChange={onChange} />
                )}
            </div>
            <button type="submit" className={styles['btn-search']}>
                {text}
            </button>
        </form>
    );
}

export default Form;
