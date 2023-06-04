import PropTypes from 'prop-types';

import styles from './tweet.module.scss';
import { Button } from '../../shared/components';
import logo from '../../images/logo.svg';

import elipse from '../../images/elipse.png';
import elipse2x from '../../images/elipse2x.png';

const numFormat = new Intl.NumberFormat('en-US');

export function Tweet({ card, follow }) {
    const { avatar = '', tweets = 0, followers = 0, following = false } = card;

    const onFollow = () => {
        if (following) {
            follow({ ...card, following: false, followers: followers - 1 });
        } else {
            follow({ ...card, following: true, followers: followers + 1 });
        }
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

Tweet.propTypes = {
    card: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            tweets: PropTypes.number.isRequired,
            followers: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
            following: PropTypes.bool.isRequired,
        })
    ).isRequired,
    follow: PropTypes.func.isRequired,
};
