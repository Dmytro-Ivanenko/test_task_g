import PropTypes from 'prop-types';

import styles from './container.module.scss';

export function Container({ children }) {
    return <div className={styles.container}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};
