import PropTypes from 'prop-types';

import styles from './button.module.scss';
export function Button({ btnFunction, type = 'button', className, children }) {
    return (
        <button className={`${styles.button} ${className}`} type={type} onClick={btnFunction}>
            {children}
        </button>
    );
}

Button.propTypes = {
    btnFunction: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
