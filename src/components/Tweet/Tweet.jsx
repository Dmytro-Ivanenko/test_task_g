import styles from './tweet.module.scss';
import { Button } from '../../shared/components';
import logo from '../../images/logo.svg';
import elipse from '../../images/elipse.svg';

export function Tweet({ card }) {
    const { avatar, tweets, followers, following = false } = card;

    const onFollow = () => {
        console.log('follow');
    };
    return (
        <div className={styles.tweet}>
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={styles.line} />
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <img className={styles.elipse} src={elipse} alt="elips" />

            <p>{`${tweets} tweets`}</p>
            <p>{`${followers} followers`}</p>
            <Button btnFunction={onFollow}>{`${following ? 'following' : 'follow'}`}</Button>
        </div>
    );
}
