import styles from './tweet.module.scss';
import { Button } from '../../shared/components';
export function Tweet({ avatar, tweets, followers, following = false }) {
    const onFollow = () => {
        console.log('follow');
    };
    return (
        <div className={styles.tweet}>
            <img src={avatar} alt="avatar" />
            <p>{`${tweets} tweets`}</p>
            <p>{`${followers} followers`}</p>
            <Button btnFunction={onFollow}>{`${following ? 'following' : 'follow'}`}</Button>
        </div>
    );
}
