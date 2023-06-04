import styles from './tweet.module.scss';
import { Button } from '../../shared/components';
import logo from '../../images/logo.svg';

import elipse from '../../images/elipse.png';
import elipse2x from '../../images/elipse2x.png';

const numFormat = new Intl.NumberFormat('en-US');

export function Tweet({ card }) {
    const { avatar = '', tweets = 0, followers = 0, following = false } = card;

    const onFollow = () => {
        console.log('follow');
    };
    return (
        <div className={styles.tweet}>
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={styles.line} />
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <img
                className={styles.elipse}
                srcSet={`${elipse} 80w, ${elipse2x} 160w`}
                sizes="80px"
                src={elipse}
                alt="elips"
            />

            <div className={styles.infoWrapper}>
                <p className={styles.info}>{`${numFormat.format(tweets)} tweets`}</p>
                <p className={styles.info}>{`${numFormat.format(followers)} followers`}</p>
            </div>
            <Button className={`${styles.button} ${following && styles.following} `} btnFunction={onFollow}>{`${
                following ? 'following' : 'follow'
            }`}</Button>
        </div>
    );
}
