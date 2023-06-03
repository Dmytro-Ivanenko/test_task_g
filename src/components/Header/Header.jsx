import { NavLink } from 'react-router-dom';
import { Container } from '../../shared/components';
import styles from './header.module.scss';
export function Header() {
    return (
        <div className={styles.header}>
            <Container>
                <ul className={styles.navList}>
                    <li>
                        <NavLink className={styles.navLink} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navLink} to="/tweets">
                            Tweets
                        </NavLink>
                    </li>
                </ul>
            </Container>
        </div>
    );
}
