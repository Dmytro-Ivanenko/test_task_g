import styles from './button.module.scss';
export function Button({ btnFunction, type = 'button', className, children }) {
    return (
        <button className={`${styles.button} ${className}`} type={type} onClick={btnFunction}>
            {children}
        </button>
    );
}
