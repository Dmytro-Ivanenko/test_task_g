import { Link } from 'react-router-dom';

import styles from './home.module.scss';
export function Home() {
    return (
        <>
            <h1 className={styles.title}>Hello my dear user!</h1>
            <Link className={styles.link} to="/tweets">
                Want to go to tweets?
            </Link>
        </>
    );
}
