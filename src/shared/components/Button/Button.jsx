import styles from './button.module.scss';
export function Button({ btnFunction, type = 'button', children }) {
    return (
        <button className={styles.button} type={type} onClick={btnFunction}>
            {children}
        </button>
    );
}
