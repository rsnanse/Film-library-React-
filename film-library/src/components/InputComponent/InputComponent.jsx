import styles from './InputComponent.module.css';
function InputComponent({ placeholder, value, onChange, icon }) {
    return (
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
    );
}

export default InputComponent;
